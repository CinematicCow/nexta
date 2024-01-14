import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
    fullName: String,
    email: String,
    phoneNumber: String,
    guests: Number,
    bookingDate: Date,
    bookingTime: String,
    type: String
})

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking
