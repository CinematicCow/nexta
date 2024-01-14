"use server";

import Mongodb from "@/lib/mongodb"
import Booking from "@/lib/models/booking"

export const addBooking = async (formData: FormData) => {
    // establish connection
    await Mongodb()

    await Booking.create({
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phoneNumber: formData.get("phone"),
        guests: formData.get("numGuests"),
        bookingDate: formData.get("bookingDate"),
        bookingTime: formData.get("bookingTime"),
    })

    console.log('RESERVED!')
}

