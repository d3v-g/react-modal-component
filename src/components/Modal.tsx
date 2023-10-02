import { ButtonType, ModalStatus } from "../enum/enum"
import Button from "./Button"
import "../styles/components/modal.scss"

export interface IModalProps {
    isOpen: boolean
    title: string
    description: string
    status: ModalStatus
    onClose: () => void
    onContinue: () => void
}

export const Modal: React.FC<IModalProps> = ({
    isOpen,
    title,
    description,
    status,
    onClose,
    onContinue,
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
            <div className="modal__box" role="dialog" aria-label={title}>
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

                <div className="modal__children">
                    <Button
                        handleClick={onClose}
                        label="Cancel"
                        type={ButtonType.SECONDARY}
                    />
                    <Button
                        handleClick={onContinue}
                        label="Continue"
                        type={ButtonType.PRIMARY}
                    />
                </div>
            </div>
        </div>
    )
}

export default Modal
