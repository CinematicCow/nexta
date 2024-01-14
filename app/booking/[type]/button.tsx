"use client"

import { useFormStatus } from "react-dom"

type Props = {
    text: string
}
function Button({ text }: Props) {
    const { pending } = useFormStatus()
    return (
        <button className="btn btn-primary container mx-auto" type="submit" aria-disabled={pending}>{text}</button>
    )
}

export default Button
