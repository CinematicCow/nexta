"use client"
import { items } from "@/config/carousel"
import Embla from "@/components/Embla"
import ReviewEmbla from "@/components/reviewEmbla"
import { reviews } from "@/config/review"
import { EmblaOptionsType } from 'embla-carousel'
import Link from "next/link"

export default function Home() {
    const OPTIONS: EmblaOptionsType = {
        loop: true,
        slidesToScroll: 'auto',
        containScroll: 'trimSnaps'
    }
    const SLIDE_COUNT = items.length
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    const REVIEW_OPTIONS: EmblaOptionsType = { align: 'start', containScroll: 'trimSnaps' }
    const REVIEW_SLIDE_COUNT = reviews.length
    const REVIEW_SLIDES = Array.from(Array(REVIEW_SLIDE_COUNT).keys())
    return (
        <div>


            <div className="hero min-h-screen mb-36" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}>
                <div className="hero-overlay bg-opacity-50" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-8xl font-typer">Good food. Good coffee.</h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center pt-[120px] mb-36">
                <h1 className="font-typer text-5xl text-center max-w-xl">
                    Open early, every day…
                </h1>
                <p className="mt-8 font-sen font-light text-clip max-w-5xl text-center text-2xl">
                    Step into a world of flavor at our cozy cafe, where the aroma of freshly brewed coffee welcomes
                    you from <span className="font-bold">6:30 am every morning</span>. Indulge in a delightful
                    breakfast or savor our tempting brunch and lunch offerings <span className="font-bold">until 2 pm daily.</span>
                    Our menu is crafted to satisfy your cravings with a perfect blend of taste and quality.
                </p>

                <div className="mt-[1.5em]">
                    <Link href="/menu" className="font-sen font-semibold underline">view our menu &gt;</Link>
                </div>
            </div>

            <Embla slides={SLIDES} options={OPTIONS} />


            <div className="flex flex-col justify-center items-center pt-[120px] mb-20 bg-base-200">
                <h1 className="font-typer text-5xl text-center max-w-xl">Customer Reviews</h1>
                <div className="w-1/2 carousel rounded-box">
                    <ReviewEmbla slides={REVIEW_SLIDES} options={REVIEW_OPTIONS} />
                </div>
            </div>
        </div >



    )
} 
