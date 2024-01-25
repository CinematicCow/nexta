"use client"
import Link from "next/link"
import { navMenus } from "../config/navItem"
import Image from "next/image"
import { Phone } from "lucide-react"
import { useEffect, useState } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Adjust the scroll threshold based on your hero image height
            const scrollThreshold = 300;
            const isScrolled = window.scrollY > scrollThreshold;

            setScrolled(isScrolled);
        };

        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`navbar px-10 fixed z-50 transition-all ${scrolled ? 'bg-base-100 shadow' : 'bg-transparent text-white'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        ><path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            /></svg
                        >
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
                    >
                        {
                            navMenus.map((menu, i) => {
                                return (
                                    <li key={i + 1}>
                                        <Link href={menu.route}>{menu.name}</Link>
                                    </li>
                                )
                            })
                        }
                        <Link href='/booking' className="btn btn-primary text-neutral-100">Book a table</Link>
                    </ul>
                </div>

                <div className="lg:avatar hidden">
                    <div className="w-24 rounded-full">
                        <Image src="/logo.png" width={100} height={100} alt="logo" />
                    </div>
                </div>
                <Link className="btn btn-ghost text-xl" href="/">Big Tree House </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navMenus.map((menu, i) => {
                            return (
                                <li key={i + 1}>
                                    <Link href={menu.route}>{menu.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Link href='/booking' className="btn btn-primary text-neutral-100">Book a table</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <Phone className="w-4 mr-2" />
                <p className="font-sem">02 8626 9007</p>
            </div>

            <div className="navbar-end lg:hidden">
                <Link href="tel:0286269007"><Phone className="w-10 -mr-7" /></Link>
            </div>
        </div>
    )
}

export default Navbar
