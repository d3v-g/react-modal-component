import { ReactNode } from "react"
import { ModalStatus } from "../enum/enum"
import "../styles/components/modal.scss"

export default function Modal({
    ariaLabel,
    isOpen,
    title,
    description,
    status,
    children,
}: {
    ariaLabel: string
    isOpen: boolean
    title: string
    description: string
    status: ModalStatus
    children: ReactNode
}) {
    if (!isOpen) return null

    return (
        <div aria-describedby="modal description" className="modal__container">
            <div className="modal__box" role="dialog" aria-label={ariaLabel}>
                <div
                    className="modal__description--screenreader"
                    id="modal description"
                ></div>
                <div className="modal__content">
                    <h1
                        className={
                            "modal__title " +
                            (status === ModalStatus.SUCCESS
                                ? "modal__title--success"
                                : "modal__title--error")
                        }
                    >
                        {title}
                    </h1>
                    <p>{description}</p>
                </div>

                <hr className="modal__divider" />

                <div className="modal__children">{children}</div>
            </div>
        </div>
    )
}
