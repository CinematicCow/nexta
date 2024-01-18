import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { navMenus } from "../config/navItem"

function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-gradient-to-b from-primary to-lime-800 text-white text-xl">
            <nav className="grid grid-flow-col gap-4">
                {
                    navMenus.map((menu, i) => {
                        return (
                            <Link key={i} href={menu.route} className="link link-hover">{menu.name} </Link>
                        )
                    })
                }
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Instagram /> Connect with us on Instagram.
                </div>
            </nav>
            <aside>
                <p>Copyright © 2024 - All right reserved by The Big Tree House.</p>
            </aside>
        </footer>
    )
}

export default Footer
