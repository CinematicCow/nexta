"use client"
import { items } from "@/config/carousel"
import { reviews } from "@/config/review"
import Image from "next/image"
import Timer from "@/components/Timer"
import Link from "next/link"

export default function Home() {

    return (
        <div>
            <Timer />


            <div className="hero min-h-screen mb-36" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}>
                <div className="hero-overlay bg-opacity-50" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-8xl font-arthemis">Good food. Good coffee.</h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center pt-[120px] mb-36">
                <h1 className="font-arthemis text-6xl text-center max-w-xl">
                    All-day menu, fresh, vibrant, locally sourced
                </h1>
                <p className="mt-8 font-sen font-light text-clip max-w-5xl text-center text-2xl">
                    All-day menu prepared with love, care & amazingly fresh, locally sourced ingredients.
                    Gluten-free, Vegan & Vegetarian options to suit your dietary requirements. All of this, paired
                    with excellent coffee.
                </p>

                <div className="mt-[1.5em]">
                    <Link href="/gallery" className="font-sen font-semibold hover:underline">view gallery &gt;</Link>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="carousel carousel-center  p-4 space-x-10 ">
                    {
                        items.map((item, i) => {
                            return (
                                <div className="carousel-item" key={i}>
                                    <Image src={item.url} alt={item.alt} height={100} width={300} className="border-4 border-image rounded-md" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex flex-col justify-center items-center pt-[120px] mb-36">
                <h1 className="font-arthemis text-6xl text-center max-w-xl">Open early, every day…</h1>
                <p className="mt-8 font-sen font-light text-clip max-w-5xl text-center text-2xl">
                    Come in for a morning coffee or a tasty breakfast from 7 am every morning, enjoy delicious
                    brunch and lunch dishes until 3 pm every day. Experience a refreshingly personal yet skilled
                    service by a friendly team in a vibrant and lively environment. Unwind with us!
                </p>
            </div>

            <div className="flex flex-col justify-center items-center pt-[120px] mb-[5em] pb-6 bg-secondary">
                <h1 className="font-arthemis text-6xl text-center max-w-xl">Customers Reviews</h1>
                <div className="w-1/2 carousel rounded-box">
                    {
                        reviews.map((review, i) => {
                            return (
                                <div className="carousel-item w-full justify-center items-center" key={i}>
                                    <p className="mt-8 font-sen font-light text-clip max-w-5xl text-center text-2xl">
                                        {review.text}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >



    )
} 
