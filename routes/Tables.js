import { 
    createTable, 
    updateTable,
    deleteTable, 
    getTable, 
    getTables 
} from "../Controllers/tableController.js";
import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/createTable", verifyAdmin, createTable);

router.put("/updateTable/:id", verifyAdmin, updateTable);

router.delete("/deleteTable/:id", verifyAdmin, deleteTable);

router.get("/getTable/:id", verifyUser, getTable);

router.get("/getTables", verifyUser, getTables );
    
export default router

