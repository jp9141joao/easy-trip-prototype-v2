import dotev from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { HttpResult } from "../models/httpResult";
import { TokenService } from "../services/tokenService";

dotev.config();
const SECRET_KEY = process.env.SECRET_KEY;

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

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

    try {
        const decodedComplete = jwt.decode(token, { complete: true }) as any;
        const jti = decodedComplete.header.jti;

        if (!jti) throw new Error('JTI not found in token');

        if (await TokenService.isRevoked(jti)) {
            res.status(403).json(HttpResult.Fail('Token has been revoked'));
            return;
        }

        const payload = jwt.verify(token, SECRET_KEY as string) as JwtPayload;
        (req as any).userId = payload.sub;

        next();

    } catch (error) {
        res.status(403).json(HttpResult.Fail('Invalid or expired token'));
        return;
    }
}