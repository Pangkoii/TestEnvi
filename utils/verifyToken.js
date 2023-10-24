import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js"
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
        if(!token){
            return next(createError(401, "Forbidden"))
        }

        jwt.verify(token, process.env.JWT, (err,user) => {
            if(err) return next(createError(403, "Invalid Token"));
            req.user = user;
            next();
        })
};