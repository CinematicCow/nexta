"use client";
import { useRouter } from "next/navigation";
import Image from "next/image"
import Link from "next/link";


type CardProps = { location: string, img: string, desc: string }
const Card = (props: CardProps) => {
    const router = useRouter()

    return (
        <Link href={"/booking/" + props.location}>
            <div className="card w-auto h-auto bg-base-100 shadow-xl image-full" >
                <figure><Image src={props.img} alt={props.location} width={600} height={200} /></figure>
                <div className="card-body text-center">
                    <h2 className="mt-10 text-4xl font-typer ">{props.location}</h2>
                    <p className="mt-8 font-sen">{props.desc}</p>
                </div>
            </div>
        </Link>
    );
}

function Booking() {


    return (
        <div className="h-screen">

            <div
                className="hero"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1543429075-382b4e6014ab?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", minHeight: "40em" }}
            >
                <div className="hero-overlay bg-opacity-60" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold font-typer">Dine In Spots</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly items-center mt-20">
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
        </div>
    )
}

export default Booking
