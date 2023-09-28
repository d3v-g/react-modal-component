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
            <div>
                {/* actual modal window */}
                <div>{modalIsOpen && modalElement(handleClose)}</div>
            </div>
        </>
    )
}
