import React from 'react'
import type { Menu } from './menuHandler'

type MenuCardProps = {
    className?: string,
    isNew?: boolean
    menu?: Menu
}


function MenuCard({ className, isNew, menu }: MenuCardProps) {
    return (
        <div className={className}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{menu?.name.toUpperCase()}
                        {isNew ?
                            <div className="badge badge-secondary">NEW</div> : null
                        }
                    </h2>
                    <p className=''>{menu?.desc}</p>
                    <div className="card-actions justify-end">
                        <h5 className='font-typer font-bold text-2xl'>${menu?.price}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuCard
