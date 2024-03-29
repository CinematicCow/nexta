import Image from "next/image"

type CardProps = { title: string, desc: string, img: string }
const Card = (props: CardProps) => {
    return (
        <div className="card card-compact w-96 h-full bg-base-100 shadow-xl m-10">
            <figure><Image src={props.img} alt="foto" width={400} height={100} /></figure>
            <div className="card-body">
                <h2 className="card-title font-typer">{props.title}</h2>
                <p className="font-sen">{props.desc}</p>
            </div>
        </div>

    )
}



function About() {
    return (
        <div className="flex flex-col justify-evenly">
            <div
                className="hero"
                style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1679434184867-a294eb85400c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", minHeight: "40em" }}
            >
                <div className="hero-overlay bg-opacity-60" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-8xl font-bold font-typer">About</h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center pt-[120px] mb-[5em] px-10">
                <h1 className="font-typer text-6xl text-center max-w-xl">
                    We are a local family friendly cafe!
                </h1>
                <p className="mt-8 font-sen font-light text-clip max-w-5xl text-center text-2xl">
                    😊 We&apos;d love to serve you and your friends & family our great coffee & super good looking sumptuous collection of breakfast and lunch served all day! Our healthy Poke bowls are an absolute
                    delight :) We continuously strive to provide a unique, well-rounded, enjoyable and memorable experience for our guests. and YES we are dog friendly! You can give us a call to make a booking to reserve a table for you before
                    you come !
                </p>
            </div>

            <div className="flex flex-row flex-wrap justify-evenly items-center mb-32  px-10">
                <Card
                    title="Dine-in Food & Drinks"
                    desc="Welcome! Step inside, take a seat, and immerse yourself in our cozy ambiance. Experience the pleasure of dining in with exceptional coffee, refreshing meals, light snacks, lunch, and more."
                    img="https://images.unsplash.com/photo-1587080413959-06b859fb107d?w=400&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMGN1cHxlbnwwfHwwfHx8MA%3D%3D"
                />

                <Card
                    title="Convenient Takeaways"
                    desc="Place your online order on UberEats or MenuLog and pick up your takeaways hassle-free. Explore a variety of options to suit your preferences."
                    img="https://images.unsplash.com/photo-1597579018905-8c807adfbed4?w=400&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                <Card
                    title="Venue Hire"
                    desc="Entrust us with your birthdays and parties—sit back, relax, and craft wonderful memories while we host your event."
                    img="https://images.unsplash.com/photo-1609590981063-d495e2914ce4?w=400&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </div>
        </div >
    )
}

export default About
