import express from "express";
import Hotel from "../models/hotel.js";
import { createHotel, deleteHotel,updateHotel, getHotel, getHotels } from "../controllers/hotel.js";

const router = express.Router();

// INI CREATE
router.post("/", createHotel);


// INI UPDATE
router.put("/:id", updateHotel);

// INI DELETE
router.delete("/:id", deleteHotel);

// INI GET
router.get("/:id", getHotel);

// INI GET ALL
router.get("/", getHotels);

export default router