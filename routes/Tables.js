import { 
    createTable, 
    updateTable,
    deleteTable, 
    getTable, 
    getTables 
} from "../Controllers/tableController.js";
import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { verifyQRToken } from "../utils/verifyOwner.js";
import { createOrder, getOrders, getTableOrders } from "../Controllers/orderController.js";

const router = express.Router();

router.post("/createTable", verifyAdmin, createTable);

router.put("/updateTable/:id", verifyAdmin, updateTable);

router.delete("/deleteTable/:id", verifyAdmin, deleteTable);

router.get("/getTable/:id", verifyUser, getTable);

router.get("/getTables", verifyUser, getTables );

router.get("/table/orders", verifyQRToken, getOrders)

router.post("/createorder", createOrder)

router.get("/:tableid/:orderId", getTableOrders)
    
export default router

