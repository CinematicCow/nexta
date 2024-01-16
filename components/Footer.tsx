import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { navMenus } from "../config/navItem"

function Footer() {
    return (
        <footer className="footer px-10 pt-10 pb-5 bg-neutral text-neutral-content">
            <aside>
                <Image src="/logo.png" alt="logo" width={70} height={50} />
                <p>Big Tree House<br />Local family friendly cafe.</p>
            </aside>
            <nav>
                <header className="footer-title">Links</header>
                {
                    navMenus.map((menu,i) => {
                        return (
                            <Link key={i} className="link link-hover" href={menu.route}>{menu.name.toUpperCase()}</Link>
                        )
                    })
                }
            </nav>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                    <Link href="https://instagram.com"><Instagram /></Link>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
