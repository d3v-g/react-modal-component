import { ReactNode } from "react"

export default function Modal({
    title,
    description,
    children,
}: {
    title: string
    description: string
    children: ReactNode
}) {
    return (
        <div className="modal__content">
            <h1>{title}</h1>
            <p>{description}</p>
            {children}
        </div>
    )
}
