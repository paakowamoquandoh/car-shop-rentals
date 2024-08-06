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

export const countByType = async (req, res, next) => {
    const types = req.query.types.split(",");
    try {
      const list = await Promise.all(
        types.map((type) => {
          return Car.countDocuments({ type: type });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };

  export const countByYear = async (req, res, next) => {
    try {
      const newModelsCount = await Car.countDocuments({ type: "New Models" });
      const recentModelsCount = await Car.countDocuments({ type: "Recent Models" });
      const oldModelsCount = await Car.countDocuments({ type: "Old Models" });
      const classicModelsCount = await Car.countDocuments({ type: "Classic Models" });
      const vintageModelsCount = await Car.countDocuments({ type: "Vintage Models" });
  
      res.status(200).json([
        { type: "New Models", count: newModelsCount },
        { type: "Recent Models", count: recentModelsCount },
        { type: "Old Models", count: oldModelsCount },
        { type: "Classic Models", count: classicModelsCount },
        { type: "Vintage Models", count: vintageModelsCount },
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


