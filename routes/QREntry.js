import express from "express";
import { scanQR, verifyQRToken } from "../utils/verifyOwner.js";
import { getRestaurant } from "../Controllers/restaurantController.js";

const router = express.Router();


//EntryPoint [When scanning QR you will be sent here]
//TL;DR : QR sends you to [xxxxxx.com/qr/:restaurantid]
router.get("/:restaurantid", scanQR, verifyQRToken)


export default router