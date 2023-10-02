import { ReactNode } from "react"
import { ModalStatus } from "../enum/enum"
import "../styles/components/modal.scss"

export interface IModalProps {
    ariaLabel: string
    isOpen: boolean
    title: string
    description: string
    status: ModalStatus
    children: ReactNode
}

export const Modal: React.FC<IModalProps> = ({
    ariaLabel,
    isOpen,
    title,
    description,
    status,
    children,
}) => {
    if (!isOpen) return null

    return (
        <div
            aria-labelledby="modal title"
            aria-describedby="modal description"
            aria-modal="true"
            className="modal__container"
            data-testid="modal"
        >
            <div className="modal__box" role="dialog" aria-label={ariaLabel}>
                <div className="modal__content">
                    <h1
                        className={
                            "modal__title " +
                            (status === ModalStatus.SUCCESS
                                ? "modal__title--success"
                                : "modal__title--error")
                        }
                        id="modal title"
                    >
                        {title}
                    </h1>
                    <p id="modal description">{description}</p>
                </div>

                <hr className="modal__divider" />

                <div className="modal__children">{children}</div>
            </div>
        </div>
    )
}

export default Modal
