import Link from "next/link"
import { InstagramIcon, FacebookIcon, TwitterIcon } from "lucide-react"
import { navMenus } from "../config/navItem"

function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-neutral-content">
            <nav className="grid grid-flow-col gap-4">
                {
                    navMenus.map((item, i) => {
                        return (
                            <Link href={item.route} key={i} className="link link-hover">{item.name}</Link>
                        )
                    })
                }
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <InstagramIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
            </nav>
            <aside>
                <p>Copyright © 2024 - All right reserved by Big Tree House Cafe.</p>
            </aside>
        </footer>
    )
}

export default Footer
