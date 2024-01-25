import Image from 'next/image'
import type { Menu } from './menuHandler'

type MenuCardProps = {
    className?: string,
    menu?: Menu
}


function MenuCard({ className, menu }: MenuCardProps) {
    return (
        <div className={className}>
            <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
                <figure className="aspect-w-16 aspect-h-9"><Image
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Menu Image"
                    height={100}
                    width={400} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-typer">{menu?.name.toUpperCase()}
                        {menu.isNew ?
                            <div className="badge badge-secondary font-sen">NEW</div> : null
                        }
                    </h2>
                    <p className='font-sen'>{menu?.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default MenuCard
