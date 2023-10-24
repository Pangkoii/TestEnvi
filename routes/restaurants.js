import express from "express";
import { createRestaurant, deleteRestaurant, getRestaurant, getRestaurants, updateRestaurant } from "../Controllers/restaurantController.js";
const router = express.Router();

//Create
router.post("/", createRestaurant);
// update by ID
router.put("/:id", updateRestaurant);
// Delete
router.delete("/:id", deleteRestaurant);
//Get by ID
router.get("/:id", getRestaurant);
//Get All
router.get("/", getRestaurants);

export default router