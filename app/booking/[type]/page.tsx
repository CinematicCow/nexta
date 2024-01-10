"use client";
import { useRouter } from 'next/router';

const BookingPage = () => {
    const router = useRouter()

    return <h1>Booking type: {router.query.type}</h1>;
};

export default BookingPage;
