import express from "express";
import { createError } from "../utils/error.js";
import { countByModel, countByYear, createCar, deleteCar, getAllCars, getCar, getCarRentals, updateCar } from "../controllers/car.js";
// import {verifyToken, verifyUser, verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", createCar)
//UPDATE
router.put("/:id", updateCar)
//DELETE
router.delete("/:id", deleteCar)
//GET
router.get("/find/:id", getCar);
//GET ALL
router.get("/", getAllCars)
router.get("/countByYear", countByYear)
router.get("/countByModel", countByModel);
router.get("/car/:id", getCarRentals);


export default router; 