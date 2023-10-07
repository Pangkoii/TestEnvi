import express from "express";
import Restaurant from "../models/Restaurant.js"
const router = express.Router();

//Create
router.post("/",async (req,res) => {
    
    const newRestaurant = new Restaurant(req.body)
    
    try {
        const savedRestaurant = await newRestaurant.save();
        res.status(200).json(savedRestaurant)
    } catch (error) {
        res.status(500).json(err)
    }
})

export default router