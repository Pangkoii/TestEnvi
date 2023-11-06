import bcrypt from "bcryptjs";
import Employee from "../models/User.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10); // Adds random texts to the hashed password
        const hash = bcrypt.hashSync(req.body.password, salt); // Hashes password and combines with the salt.
            const newEmployee = new Employee({
                username:req.body.username,
                email:req.body.email,
                name:req.body.name,
                password:hash
            })

        await newEmployee.save();
            res.status(201).send("Record Created Successfully")
    }catch (err) {
            next(err)
    }
}
export const login = async (req, res, next) => {
    try {

        // find Employee with matching username (Username is set to unique)
        const user = await Employee.findOne({username:req.body.username});
            if (!user) return next(createError(404, "User not found!"));

        // Using Bcryptjs compare function to compare input password vs user's actual password.
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
            if (!isPasswordCorrect) return next(createError(400,"Incorrect Password"));

        //jwt.sign is from jsonwebtoken library || uses the payload of the JWT (id , isAdmin)
            const token = jwt.sign({id:user._id, role: user.role, admin:user.isAdmin}, process.env.JWT)

        // breaks down the user._doc object to exclude specified information information. Only assigning the remaining things into otherDetails instead.
        // Which is then the one returned for the result.
            const { password, isAdmin, _id, ...otherDetails } = user._doc;

            //Creates a cookie named access_token, the "httpOnly" property allows the cookie to be accessible only through HTTP requests.
            res.cookie("access_token", token, {
                httpOnly: true,
            }).status(200)
            .json(otherDetails);

    }catch (err) {
            next(err)
    }
}