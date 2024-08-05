import CarRental from "../models/Carrental.js";
import Car from "../models/Car.js";
import { createError } from "../utils/error.js";

export const createCarRental = async (req, res, next) => {
  const carId = req.params.carid;
  const newCarRental = new CarRental(req.body);

  try {
    const savedCarRental = await newCarRental.save();
    try {
      await Car.findByIdAndUpdate(carId, {
        $push: { rentals: savedCarRental.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedCarRental);
  } catch (err) {
    next(err);
  }
};


export const updateCarRental = async (req, res, next) => {
  try {
    const updatedCarRental = await CarRental.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCarRental);
  } catch (err) {
    next(err);
  }
};
export const updateCarRentalAvailability = async (req, res, next) => {
  try {
    await CarRental.updateOne(
      { "carRentalNumbers._id": req.params.id },
      {
        $push: {
          "carRentalNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Rental status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteCarRental = async (req, res, next) => {
  const carId = req.params.carid;
  try {
    await CarRental.findByIdAndDelete(req.params.id);
    try {
      await Car.findByIdAndUpdate(carId, {
        $pull: { carRentals: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Rental has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getCarRental = async (req, res, next) => {
  try {
    const carRental = await CarRental.findById(req.params.id);
    res.status(200).json(carRental);
  } catch (err) {
    next(err);
  }
};
export const getCarRentals = async (req, res, next) => {
  try {
    const carRentals = await CarRental.find();
    res.status(200).json(carRentals);
  } catch (err) {  
    next(err);
  }
};