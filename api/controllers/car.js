import Car from "../models/Car.js";
import CarRental from "../models/Carrental.js";

//create
export const createCar = async (req,res,next)=>{
    const newCar = Car(req.body)
    try {
     const savedCar = await newCar.save()
     res.status(200).json(savedCar)
    } catch (err) {
     next(err)
    }
}

//update
export const updateCar = async (req,res,next)=>{
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedCar)
       } catch (err) {
        next(err)
       }
}

//delete
export const deleteCar = async (req,res,next)=>{
    try {
        await Car.findByIdAndDelete(req.params.id)
        res.status(200).json("Car has been deleted")
       } catch (err) {
        next(err)
       }
}

//get
export const getCar = async (req, res, next) => {
  try {
    const car = await Car.findById(req.params.id);
    res.status(200).json(car);
  } catch (err) {
    next(err);
  }
};

//getall
export const getAllCars = async (req,res,next)=>{
  const limit = req.query.limit
  // delete req.query.limit
  // const { min, max, ...others} = req.query
  // try {
  //   const cars = await Car.find({...others, cheapestPrice: {$gt:min | 1, $lt:max || 999}}).limit(limit);
  //   res.status(200).json(cars);
  // } catch (err) {
  //   next(err)
  // }
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (err) {
    next(err)
  }
};

export const countByYear = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Car.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };

  export const countByModel = async (req, res, next) => {
    try {
      const carCount = await Car.countDocuments({ type: "Honda" });
      const apartmentCount = await Car.countDocuments({ type: "Toyota" });
      const resortCount = await Car.countDocuments({ type: "BMW" });
      const villaCount = await Car.countDocuments({ type: "Nissan" });
      const cabinCount = await Car.countDocuments({ type: "Others" });
  
      res.status(200).json([
        { type: "hotel", count: carCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
      next(err);
    }
  };
  
  export const getCarRentals = async (req, res, next) => {
    try {
      const car = await Car.findById(req.params.id);
      const list = await Promise.all(
        car.rentals.map((rental) => {
          return CarRental.findById(rental);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };


