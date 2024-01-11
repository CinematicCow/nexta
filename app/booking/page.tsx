"use client";
import { useRouter } from "next/navigation";
import Image from "next/image"


type CardProps = { location: string, img: string, desc: string }
const Card = (props: CardProps) => {
    const router = useRouter()

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full" onClick={() => router.push("/booking/" + props.location)}>
            <figure><Image src={props.img} alt={props.location} width={400} height={100} /></figure>
            <div className="card-body text-center">
                <h2 className="mt-10 text-4xl font-typer ">{props.location}</h2>
                <p className="mt-8 font-sen">{props.desc}</p>
            </div>
        </div>
    );
}

function Booking() {


    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-8xl font-typer mt-28"> Dine in spots</h1>
            </div>
            <div className="flex justify-evenly items-center h-screen">
                <Card
                    location="Indoor"
                    desc="This is a sample description for the card."
                    img="https://images.unsplash.com/photo-1494346480775-936a9f0d0877?q=80&w=1416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card
                    location="Outdoor"
                    desc="This is a sample description for the card."
                    img="https://images.unsplash.com/photo-1613165716050-dac0978669f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG91dGRvb3IlMjBjYWZlfGVufDB8MHwwfHx8MA%3D%3D"
                />
                <Card
                    location="Garden"
                    desc="This is a sample description for the card."
                    img="https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </div>
        </>
    )
}

export default Booking
