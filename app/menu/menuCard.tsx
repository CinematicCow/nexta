import Image from 'next/image'
import type { Menu } from './menuHandler'

type MenuCardProps = {
    className?: string,
    menu: Menu
}


function MenuCard({ className, menu }: MenuCardProps) {
    return (
        <div className={className}>
            <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl  truncate hover:overflow-visible hover:whitespace-normal ">
                <figure ><Image
                    src="/menu.jpeg"
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
