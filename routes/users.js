import express from "express";
import { deleteEmployee, getEmployee, getEmployees, updateEmployee } from "../Controllers/employeeController.js";
import { verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/checkAuth", verifyToken, (req, res, next)=> {
    res.send("Logged In Successfully")
})
// update by ID
router.put("/:id", updateEmployee);
// Delete
router.delete("/:id", deleteEmployee);
//Get by ID
router.get("/:id", getEmployee);
//Get All
router.get("/", getEmployees);

export default router