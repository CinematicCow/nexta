import Link from "next/link"
import { navMenus } from "../config/navItem"
import Image from "next/image"

function Navbar() {
    return (
        <div className="navbar bg-base-100 px-10">
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
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {
                            navMenus.map((menu, i) => {
                                return (
                                    <li key={i+1}>
                                        <Link href={menu.route}>{menu.name}</Link>
                                    </li>
                                )
                            })
                        }
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
                        navMenus.map((menu,i) => {
                            return (
                                <li key={i+1}>
                                    <Link href={menu.route}>{menu.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link href='/booking' className="btn btn-primary text-neutral-100">Book a table</Link>
            </div>
        </div>
    )
}

export default Navbar
