import { useState } from "react"

export default function ModalController({
    modalElement,
    controlElement,
}: {
    modalElement: React.FC<() => void>
    controlElement: React.FC<() => void>
}) {
    const handleClick = () => {
        setModalIsOpen(true)
    }

    const handleClose = () => {
        setModalIsOpen(false)
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div>
            {controlElement(handleClick)}
            {/* full-screen wrapper */}
            <div
                aria-hidden={!modalIsOpen}
                role="dialog"
                aria-describedby="modal description"
            >
                <div id="modal description"></div>
                {modalIsOpen && <div>{modalElement(handleClose)}</div>}
            </div>
        </div>
    )
}
