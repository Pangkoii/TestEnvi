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

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin || req.user.role === 'Manager') {
            next();
        } else return next(createError(403, "You are not authorized"));
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req,res, () => {
        if (req.user.isAdmin) {
            next();
        } else return next(createError(403, "You are not Authorized"));
    });
}

export const verifyKitchen = (req, res, next) => {
    verifyToken(req,res, () => {
        if((req.user.id === req.params.employeeid && req.user.role === 'Kitchen') || req.user.isAdmin) {
            next();
        } else return next(createError(403, "You Are Unauthorized. Must be Kitchen Staff/Admin"))
    });
}
export const verifyWaiter = (req, res, next) => {
    verifyToken(req,res, () => {
        if((req.user.id === req.params.employeeid && req.user.role === 'Waiter') || req.user.isAdmin) {
            next();
        } else return next(createError(403, "You Are Unauthorized. Must be Waiter Staff/Admin"))
    });
}
export const verifyReceptionist = (req, res, next) => {
    verifyToken(req,res, () => {
        if((req.user.id === req.params.employeeid && req.user.role === 'Receptionist') || req.user.isAdmin) {
            next();
        } else return next(createError(403, "You Are Unauthorized. Must be Receptionist/Admin"))
    });
}