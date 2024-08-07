import express from "express";
import { createError } from "../utils/error.js";
import { countByModel, countByType, createCar, deleteCar, getAllCars, getCar, getCarRentals, updateCar } from "../controllers/car.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCar)
//UPDATE
router.put("/:id", verifyAdmin, updateCar)
//DELETE
router.delete("/:id", verifyAdmin, deleteCar)
//GET
router.get("/find/:id", getCar);
//GET ALL
router.get("/", getAllCars)
router.get("/countByModel", countByModel)
router.get("/countByType", countByType);
router.get("/car/:id", getCarRentals);


export default router; 