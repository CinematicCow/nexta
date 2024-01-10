type CardProps = { title: string, desc: string, img: string }
const Card = (props: CardProps) => {
    return (
        <div className="card card-compact w-96 h-full bg-base-100 shadow-xl">
            <figure><img src={props.img} alt="foto" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>

    )
}



function About() {
    return (
        <div>
            <div
                className="hero"
                style={{ backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)", minHeight: "40em" }}
            >
                <div className="hero-overlay bg-opacity-60" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold font-elite">About</h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center pt-[120px] mb-[5em]">
                <h1 className="font-elite text-4xl text-center max-w-xl">
                    Second Home Cafe is your home away from home…
                </h1>
                <p className="mt-8 font-sen font-light text-clip max-w-5xl text-center text-2xl">
                    An ode to a place where friends & family can enjoy good food, conversations & laughter. Some of
                    our greatest hits are freshly brewed coffee, breakfast, smoothies, and a bespoke café menu. Food
                    should stimulate the mind and enrich the soul. We focus on local and sustainable fresh produce,
                    providing better quality and better-tasting food for guests. Our fantastic team is inspired to
                    create dishes that are banging with flavours. We offer exceptional service that makes your visit
                    a memorable experience.
                </p>
            </div>

            <div className="flex flex-row flex-wrap justify-around items-center mb-5 h-ful ">
                <Card
                    title="Dine-in Food & Drinks"
                    desc="Welcome! Come on in, pull a chair & enjoy the cosy atmosphere. Dine in and enjoy excellent coffee, refreshing meals, light snacks, lunch and more."
                    img="https://images.unsplash.com/photo-1587080413959-06b859fb107d?w=400&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMGN1cHxlbnwwfHwwfHx8MA%3D%3D"
                />

                <Card
                    title="Convenient Takeaways"
                    desc="Take the Second Home experience with you. Order online and collect your takeaways. We have plenty of options to choose from."
                    img="https://images.unsplash.com/photo-1597579018905-8c807adfbed4?w=400&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                <Card
                    title="Venue Hire & Catering"
                    desc="Birthdays, Bridal showers, Christmas parties or Work events, let us host your event while you relax and make good memories. We are happy to cater at your chosen venue as well."
                    img="https://images.unsplash.com/photo-1609590981063-d495e2914ce4?w=400&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </div>
        </div >
    )
}

export default About
