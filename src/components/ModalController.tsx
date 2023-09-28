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
        <>
            {controlElement(handleClick)}
            {/* full-screen wrapper */}
            <div onClick={handleClose}>
                {/* actual modal window */}
                <div onClick={(e) => e.stopPropagation()}>
                    {modalIsOpen && modalElement(handleClose)}
                </div>
            </div>
        </>
    )
}
