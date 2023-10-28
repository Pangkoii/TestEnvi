import express from "express";
import { createRestaurant, deleteRestaurant, getRestaurant, getRestaurants, updateRestaurant } from "../Controllers/restaurantController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//Create
router.post("/", verifyAdmin, createRestaurant);
// update by ID
router.put("/:id", verifyAdmin, updateRestaurant);
// Delete
router.delete("/:id", verifyAdmin, deleteRestaurant);
//Get by ID
router.get("/:id", getRestaurant);
//Get All
router.get("/", getRestaurants);

export default router