"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { addBooking } from "./formHandler";
import Button from "./button";

type BookingParams = {
    params: {
        type: string
    }
}

const reservationSchema = z.object({
    fullName: z.string(),
    email: z.string().email(),
    phone: z.number().min(10).max(10),
    bookingDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    bookingTime: z.string().regex(/^\d{2}:\d{2}$/),
    numGuests: z.number().positive(),
    type: z.string()
});


type ReservationFormData = z.infer<typeof reservationSchema>;

const BookingPage = ({ params }: BookingParams) => {
    const [param, setParam] = useState<string>('');
    const [formData, setFormData] = useState<ReservationFormData>({
        fullName: '',
        email: '',
        phone: 0,
        bookingDate: '',
        bookingTime: '',
        numGuests: 0,
        type: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    useEffect(() => {
        setParam(params.type)
    }, [])

    return (
        <div className="min-h-screen">
            <div
                className="hero"
                style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1672694778664-5b32f3c516aa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", minHeight: "40em" }}
            >
                <div className="hero-overlay bg-opacity-60" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-8xl font-bold font-typer">{params.type}</h1>
                    </div>
                </div>
            </div>
            <div></div>

            <div className="flex flex-col justify-center items-center mt-20">
                <form action={addBooking} className="border border-primary rounded-lg p-11">
                    <div className="join mb-9">
                        <label className="form-control w-full max-w-xs mr-9">
                            <div className="label">
                                <span className="label-text">Full Name</span>
                            </div>
                            <input type="text" placeholder="John Doe" className="input input-bordered w-full max-w-xs"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="email" placeholder="johndoe@example.com" className="input input-bordered w-full max-w-xs"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <br />
                    <div className="join mb-9">
                        <label className="form-control w-full max-w-xs mr-9">
                            <div className="label">
                                <span className="label-text">Phone</span>
                            </div>
                            <input type="number" placeholder="98xxxxxxxx" className="input input-bordered w-full max-w-xs"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Number of Guests</span>
                            </div>
                            <input type="number" placeholder="0" className="input input-bordered w-full max-w-xs"
                                name="numGuests"
                                value={formData.numGuests}
                                onChange={handleChange}
                                max={10}
                                required
                            />
                        </label>
                    </div>
                    <br />
                    <div className="join mb-9">
                        <label className="form-control w-full max-w-xs mr-9">
                            <div className="label">
                                <span className="label-text">Reservation Date</span>
                            </div>
                            <input type="date" className="input input-bordered w-full max-w-xs"
                                name="bookingDate"
                                value={formData.bookingDate}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Reservation Time</span>
                            </div>
                            <input type="time" className="input input-bordered w-full max-w-xs"
                                name="bookingTime"
                                value={formData.bookingTime}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <label className="form-control w-full max-w-xs hide">
                        <input type="text" className="input input-bordered w-full max-w-xs"
                            name="type"
                            value={param}
                        />
                    </label>
                    <br />
                    <Button text="Book Now" />
                </form>

            </div>
        </div>
    )
};

export default BookingPage;
