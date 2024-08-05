import express from "express";
import {createCarRental, deleteCarRental, getCarRentals, getCarRental, updateCarRental, updateCarRentalAvailability} from "../controllers/carRent.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/", verifyAdmin, createCarRental);

//UPDATE
router.put("/availability/:id", updateCarRentalAvailability);
router.put("/:id", verifyAdmin, updateCarRental);
//DELETE
router.delete("/:id", verifyAdmin, deleteCarRental);
//GET

router.get("/:id", getCarRental);
//GET ALL

router.get("/", getCarRentals);

export default router;