import jwt from "jsonwebtoken"
import { Types } from "mongoose"
import type { Response } from "express"

export const generateToken = (userId: Types.ObjectId, res: Response) => {
    const jwtSecret = process.env.JWT_SECRET

    if(!jwtSecret) {
        throw new Error("JWT_SECRET is not defined")
    }
    const token = jwt.sign({userId}, jwtSecret, {
        expiresIn : "7d",
    })
    res.cookie("jwt", token, {
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV ==="development" ? false: true,

    })
    return token;
}