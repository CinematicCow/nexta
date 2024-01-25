import Image from "next/image"
import { Instagram } from "lucide-react"

function Footer() {
    return (
        <footer className="footer items-center p-8 bg-neutral text-neutral-content text-xl">
            <aside className="items-center grid-flow-col">
                <Image src="/logo.png" width={100} height={100} alt="BigTreeHouse" />
                <p>Copyright © 2024 - Big Tree House. All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <Instagram /> Connect with us on Instagram.
            </nav>
        </footer>
    )
}

export default Footer
