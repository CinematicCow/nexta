import { items } from "@/config/carousel"
import { reviews } from "@/config/review"

export default function Home() {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: "url(cafe.jpg)" }}>
                <div className="hero-overlay bg-opacity-50" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-elite">Good food. Good coffee.</h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center pt-[120px] mb-[5em]">
                <h1 className="font-elite text-4xl text-center max-w-xl">
                    All-day menu, fresh, vibrant, locally sourced
                </h1>
                <p className="mt-8 font-sen font-light text-clip max-w-5xl text-center text-2xl">
                    All-day menu prepared with love, care & amazingly fresh, locally sourced ingredients.
                    Gluten-free, Vegan & Vegetarian options to suit your dietary requirements. All of this, paired
                    with excellent coffee.
                </p>

                <div className="mt-[1.5em]">
                    <a href="/gallery" className="font-sen font-semibold hover:underline">view gallery &gt;</a>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="carousel carousel-center rounded-box">
                    {
                        items.map((item) => {
                            return (
                                <div className="carousel-item">
                                    <img src={item.url} alt={item.alt} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex flex-col justify-center items-center pt-[120px] mb-[5em]">
                <h1 className="font-elite text-4xl text-center max-w-xl">Open early, every day…</h1>
                <p className="mt-8 font-sen font-light text-clip max-w-5xl text-center text-2xl">
                    Come in for a morning coffee or a tasty breakfast from 7 am every morning, enjoy delicious
                    brunch and lunch dishes until 3 pm every day. Experience a refreshingly personal yet skilled
                    service by a friendly team in a vibrant and lively environment. Unwind with us!
                </p>
            </div>

            <div className="flex flex-col justify-center items-center pt-[120px] mb-[5em] pb-6 bg-green-200">
                <h1 className="font-elite text-4xl text-center max-w-xl">Customers Reviews</h1>
                <div className="w-1/2 carousel rounded-box">
                    {
                        reviews.map((review) => {
                            return (
                                <div className="carousel-item w-full justify-center items-center">
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
