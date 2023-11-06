import { createError } from "../utils/error.js"
import  jwt  from "jsonwebtoken";
import restaurant from "../models/Restaurant.js"
import Employee from "../models/User.js"

// IF scanQR function logic is correct :: REMOVE const restaurantid = req.params.restaurantid LINES.
export const scanQR = async (req, res, next) => {
    try {
    const restaurantid = req.params.restaurantid;

    const QRToken = jwt.sign({restaurantid}, process.env.QR)
    res.cookie('QRCookie', QRToken,{
        httpOnly: true
    });
    res.redirect(`/restaurants/${restaurantid}`)
    } catch (err) {
        next(err)
    }
};
//Cross Validate the restaurant ID to match before continuing Action:
export const verifyQRToken = (req, res, next) => {

    const qrtoken = req.cookies.QRCookie;
        if(!qrtoken){
            return next(createError(401, "Forbidden"))
        }
    
    jwt.verify(qrtoken, process.env.QR, (err, restaurantid) => {
        if(err) return next(createError(403, "Invalid Token"));
        req.restaurantid = restaurantid;
        next();
        
    })
}
//Validating Menu 
export const verifyMenuOwner = async (req, res, next) => {
    try{
    // const restaurantid = req.params.restaurantid;
    const menuid = req.params.menuid;
    
    const menu = await menu.findById(menuid);

    if (!menu) {
        return next(createError(404, "Menu Does not Exist."))
    } 
    if (menu.restaurantid.toString() !== req.restaurantid) {
        return next(createError(403, "Menu Does not belong to this restaurant."))
    }
    else {
        next();
    }
    } catch(err) {
        next(err);
    }
}

//Where does this employee belong to?
export const verifyEmployeeMembership = async (req, res, next) => {
    try {
//      const restaurantid = req.params.restaurantid;
        const employeeid = req.params.employeeid

        const employee = await Employee.findById(employeeid);

        if (!employee) {
            return next(createError(404, "Employee not Found."))
        }
        if (employee.restaurant.toString() !== req.restaurantid.restaurantid) {
            return next(createError(403, `Employee does not work at ${req.restaurantid}`))
        }
        else {
            next();
        }
    } catch (err) {
        next(err)
    }
}