import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
const prisma = new PrismaClient();

export class TokenService {

    static signToken(userId: string) {

        const jti = uuidv4();
        const expiresIn = '1h';

        const token = jwt.sign(
            { sub: userId },
            SECRET_KEY as string,
            {
                expiresIn: expiresIn,
                jwtid: jti,
            }
        );

        return { token, jti };
    }

    static async revokeToken(jti: string, expTimestamp: number) {
        const expiresAt = new Date(expTimestamp * 1000);

        await prisma.tb_revoked_token.create({
            data: {
                jti: jti,
                expires_at: expiresAt,
            }
        });
    }

    static async isRevoked(jti: string) {
        const record = await prisma.tb_revoked_token.findUnique({ where: { jti } });
        
        return !!record;
    }
}