"use client";
import { useState } from 'react'
type CardProps = { location: string, img: string, desc: string }
const Card = (props: CardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-96 h-96 bg-cover bg-center cursor-pointer shadow-md transition duration-300 transform hover:scale-105 card "
            style={{ backgroundImage: `url(${props.img})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
            ></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-lg font-bold">{props.location}</h2>
                {isHovered && <p className="mt-2 text-sm">{props.desc}</p>}
            </div>
        </div>
    );
}

function Booking() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-6xl"> Dine in spots</h1>

            </div>
            <div className="flex justify-center items-center h-screen">
                <Card
                    location="Indoor"
                    desc="This is a sample description for the card. It will be displayed on hover."
                    img="https://images.unsplash.com/photo-1494346480775-936a9f0d0877?q=80&w=1416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </div>
        </>
    )
}

export default Booking

