import express from "express";
import { deleteEmployee, getEmployee, getEmployees, updateEmployee } from "../Controllers/employeeController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
import { extractID, verifyEmployeeMembership, verifyQRToken } from "../utils/verifyOwner.js";
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
router.put("/:employeeid", verifyUser, updateEmployee);
// Delete
router.delete("/:employeeid", verifyAdmin, deleteEmployee);
//Get by ID
router.get("/:employeeid", verifyAdmin, getEmployee);
//Get All
router.get("/", verifyAdmin, getEmployees);

router.get("/employees/:employeeid", verifyQRToken, extractID, verifyEmployeeMembership, getEmployee)

export default router