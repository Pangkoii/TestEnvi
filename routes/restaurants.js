import express from "express";
import { createRestaurant, deleteRestaurant, getRestaurant, getRestaurants, updateRestaurant } from "../Controllers/restaurantController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { extractID } from "../utils/verifyOwner.js"
const router = express.Router();

//Create
router.post("/", verifyAdmin, extractID, createRestaurant);
// update by ID
router.put("/update", verifyAdmin, extractID, updateRestaurant);
// Delete
router.delete("/delete", verifyAdmin, extractID, deleteRestaurant);
//Get by ID
router.get("/get", extractID, getRestaurant);
//Get All
router.get("/", getRestaurants);

export default router