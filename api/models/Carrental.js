import mongoose from "mongoose";
const CarRentalSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    pricePerDay: {
      type: Number,
      required: true,
    },
    fuelPolicy: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    rentalNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
  },
  { timestamps: true }
);

export default mongoose.model("Room", CarRentalSchema);