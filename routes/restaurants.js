import express from "express";
import { createRestaurant, deleteRestaurant, getRestaurant, getRestaurants, updateRestaurant } from "../Controllers/restaurantController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//Create
router.post("/", verifyAdmin, createRestaurant);
// update by ID
router.put("/:restaurantid", verifyAdmin, updateRestaurant);
// Delete
router.delete("/:restaurantid", verifyAdmin, deleteRestaurant);
//Get by ID
router.get("/:restaurantid", getRestaurant);
//Get All
router.get("/", getRestaurants);

export default router