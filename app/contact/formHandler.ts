"use server"
import Mongodb from "@/lib/mongodb"
import Contact from "@/lib/models/contact"

export const handleForm = async (formData: FormData) => {
    // establish connection
    await Mongodb()

    await Contact.create({
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phoneNumber: formData.get("phone"),
        message: formData.get("message"),
    })

    console.log('Contacted!')
    return {
        message: "Contacted!"
    }
}
