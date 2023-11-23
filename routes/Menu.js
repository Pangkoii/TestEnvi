import express from "express";
import { createMenuItem, getMenuItems } from "../Controllers/menuController.js"
const router = express.Router();

router.post("/addMenuItem", createMenuItem)

router.get("/all", getMenuItems)

export default router