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

  export const countByModel = async (req, res, next) => {
    try {
      const toyotaCount = await Car.countDocuments({ model: "Toyota" });
      const hondaCount = await Car.countDocuments({ model: "Honda" });
      const hyundaiCount = await Car.countDocuments({ model: "Hyundai" });
      const nissanCount = await Car.countDocuments({ model: "Nissan" });
      const benzCount = await Car.countDocuments({ model: "Benz" });
      const BMWCount = await Car.countDocuments({ model: "BMW" });
      const volkswagenCount = await Car.countDocuments({ model: "VolksWagen" });
      const kiaCount = await Car.countDocuments({ model: "Kia" });
      const fordCount = await Car.countDocuments({ model: "Ford" });
      const otherModelsCount = await Car.countDocuments({ model: "Other" });
  
      res.status(200).json([
        { model: "Toyota", count: toyotaCount },
        { model: "Honda", count: hondaCount },
        { model: "Hyundai", count: hyundaiCount },
        { model: "Nissan", count: nissanCount },
        { model: "Benz", count: benzCount },
        { model: "BMW", count: BMWCount },
        { model: "VolksWagen", count: volkswagenCount },
        { model: "Kia", count: kiaCount },
        { model: "Ford", count: fordCount },
        { model: "Other", count: otherModelsCount },
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


