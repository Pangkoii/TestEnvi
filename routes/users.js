import express from "express";
import { deleteEmployee, getEmployee, getEmployees, updateEmployee } from "../Controllers/employeeController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkAuth", verifyToken, (req, res, next)=> {
//     res.send("Logged In Successfully")
// })
// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//     res.send("User Verified")
// })

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("u r admin xd")
// })
// update by ID
router.put("/:id", verifyUser, updateEmployee);
// Delete
router.delete("/:id", verifyAdmin, deleteEmployee);
//Get by ID
router.get("/:id", verifyUser, getEmployee);
//Get All
router.get("/", verifyAdmin, getEmployees);

export default router