import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    fullName: String,
    email: String,
    phoneNumber: String,
    message: String
})

const Contact = mongoose.models.Booking || mongoose.model("Contact", contactSchema);
export default Contact
