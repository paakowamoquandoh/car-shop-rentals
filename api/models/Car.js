import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  mileage: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  engine: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  pricePerDay: {
    type: Number,
    required: true,
  },
  forRent: {
    type: Boolean,
    default: false,
  },  
  location: {
    type: String,
    required: true,
  }
});

export default mongoose.model("Car", CarSchema)