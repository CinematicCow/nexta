import React from 'react'
import MenuCard from './menuCard'
import { type Menu, menu as Menus } from './menuHandler'

type Props = {}


const Menu = (props: Props) => {

    return (
        <>
            <div className="flex flex-col justify-evenly">
                <div
                    className="hero"
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", minHeight: "40em" }}
                >
                    <div className="hero-overlay bg-opacity-60" />
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-8xl font-bold font-typer">Menu</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center my-20 mx-10'>
                <h1 className='font-typer text-5xl mb-20'>Fresh, plant-forward, earth friendly food.</h1>

                <h3 className='font-sen text-4xl'>Breakfast</h3>
                <div className="divider" />
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 justify-center lg:mx-auto">
                    {
                        Menus.map((menu, i) => {
                            return <MenuCard key={i} menu={menu} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Menu
