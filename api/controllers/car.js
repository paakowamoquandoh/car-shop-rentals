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
    const years = req.query.years.split(",");
    try {
      const list = await Promise.all(
        years.map((year) => {
          return Car.countDocuments({ year: year });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };

  export const countByType = async (req, res, next) => {
    try {
      const sedanCount = await Car.countDocuments({ type: "Sedans" });
      const SUVCount = await Car.countDocuments({ type: "SUVs" });
      const truckCount = await Car.countDocuments({ type: "Trucks" });
      const coupeCount = await Car.countDocuments({ type: "Coupes" });
      const othersCount = await Car.countDocuments({ type: "Others" });
  
      res.status(200).json([
        { type: "Sedans", count: sedanCount },
        { type: "SUVs", count: SUVCount },
        { type: "Trucks", count: truckCount },
        { type: "Coupes", count: coupeCount },
        { type: "Ohters", count: othersCount },
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


