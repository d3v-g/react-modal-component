import { ReactNode } from "react"
import "../styles/components/modal.scss"

export default function Modal({
    isOpen,
    title,
    description,
    children,
}: {
    isOpen: boolean
    title: string
    description: string
    children: ReactNode
}) {
    if (!isOpen) return null

    return (
        <div aria-describedby="modal description" className="modal__container">
            <div className="modal__content" role="dialog">
                <div
                    className="modal__description--screenreader"
                    id="modal description"
                ></div>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="modal__children">{children}</div>
            </div>
        </div>
    )
}
