import dotev from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { Utils } from '../utils/utils';
import { PrismaClient } from '@prisma/client';
import { HttpResult } from '../models/httpResult';
import { v4 as uuidv4 } from 'uuid';
import { TokenService } from '../services/tokenService';
import { UserInfo, UserLogin } from '../types/types';

dotev.config();
const SECRET_KEY = process.env.SECRET_KEY;
const prisma = new PrismaClient();

export const SignIn = async (req: Request, res: Response): Promise<void> => {

    if (!SECRET_KEY) {
        res.status(500).json(HttpResult.Fail('SECRET_KEY is not defined in the .env file.'));
        return;
    }

    const { email, password } = req.body as UserLogin;

    if (!email) {
        res.status(400).json(HttpResult.Fail('Email is required'));
        return;

    } else if (!Utils.isValidEmail(email)) {
        res.status(400).json(HttpResult.Fail('Invalid email format'));
        return;

    }

    if (!password) {
        res.status(400).json(HttpResult.Fail('Password is required'));
        return;

    } else if (!Utils.isValidPassword(password)) {
        res.status(400).json(HttpResult.Fail('Invalid password format'));
        return;

    }

    try {
        const userData = await prisma.tb_user.findUnique({
            where: {
                email: email,
            },
        });

        if (!userData) {
            res.status(401).json(HttpResult.Fail('The email or password you entered is incorrect!'));
            return;

        }

        const isPasswordValid = await bcrypt.compare(password, userData.password);

        if (!isPasswordValid) {
            res.status(401).json(HttpResult.Fail('The email or password you entered is incorrect!'));
            return;

        }

        const userId = userData.id.toString();
        const jti = uuidv4();

        const token = jwt.sign(
            { sub: userId},
            SECRET_KEY as string,
            { 
                expiresIn: '1h', 
                jwtid: jti,
            }
        );
        
        res.status(200).json(HttpResult.Success(token));
    
    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(500).json(HttpResult.Fail('A unexpected error occured on sign-in!'));
    };
};

export const SignUp = async (req: Request, res: Response): Promise<void> => {

    if (!SECRET_KEY) {
        res.status(500).json(HttpResult.Fail('SECRET_KEY is not defined in the .env file.'));
        return;
    };

    const { fullName, email, password } = req.body as UserInfo;

    if (!fullName) {
        res.status(400).json(HttpResult.Fail('Full name is required'));
        return;

    } else if (!Utils.isFullNameValid(fullName)) {
        res.status(400).json(HttpResult.Fail('Invalid full name format'));
        return;

    }

    if (!email) {
        res.status(400).json(HttpResult.Fail('Email is required'));
        return;

    } else if (!Utils.isValidEmail(email)) {
        res.status(400).json(HttpResult.Fail('Invalid email format'));
        return;

    }

    if (!password) {
        res.status(400).json(HttpResult.Fail('Password is required'));
        return;

    } else if (!Utils.isValidPassword(password)) {
        res.status(400).json(HttpResult.Fail('Invalid password format'));
        return;

    }

    try {

        const doesUserExist = await prisma.tb_user.count({
            where: {
                email: email,
            },
        }) > 0 ? true : false; 

        if (doesUserExist) {
            res.status(409).json(HttpResult.Fail('There is already a user using this email!'));
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.tb_user.create({
            data: {
                full_name: fullName,
                email: email,
                password: hashedPassword,
            },
        });

        res.status(201).json(HttpResult.Success('User created successfully!'));

    } catch (error) {
        console.error('Error during sign-up:', error);
        res.status(500).json(HttpResult.Fail('A unexpected error occured on sign-up!'));
    }
}

export const LogOut = async (req: Request, res: Response): Promise<void> => {

    if (!SECRET_KEY) {
        res.status(500).json(HttpResult.Fail('SECRET_KEY is not defined in the .env file.'));
        return;
    };

    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        res.status(401).json(HttpResult.Fail('Token is required'));
        return;
    };
    
    const decoded = jwt.decode(token, { complete: true }) as any;
    const jti = decoded.payload.jti;
    const exp = decoded.payload.exp;

    await TokenService.revokeToken(jti, exp);

    res.status(200).json(HttpResult.Success('Logged out successfully!'));   
}

