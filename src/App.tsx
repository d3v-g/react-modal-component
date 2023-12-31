import { useState } from "react"
import "./styles/app.scss"
import { ButtonType, ModalStatus } from "./enum/enum"
import Button from "./components/Button"
import Modal from "./components/Modal"

function App() {
    const firstModalTitle =
        "Congratulations! Your jet2 holiday booking has been confirmed"
    const secondModalTitle =
        "There was an error booking your jet2 holiday, please try again"

    const firstModalDescription =
        "Lorem ipsum dolor sit amet, consectetur\
        adipiscing elit. Aliquam sit amet vulputate\
        turpis. Duis pharetra lorem a orci rutrum\
        pulvinar. Sed vel iaculis nulla, sed ornare est.\
        Nulla pretium aliquam rutrum."
    const secondModalDescription =
        "Lorem ipsum dolor sit amet, consectetur\
        adipiscing elit. Aliquam sit amet vulputate\
        turpis. Duis pharetra lorem a orci rutrum\
        pulvinar. Sed vel iaculis nulla, sed ornare est.\
        Nulla pretium aliquam rutrum."

    const [openedModalId, setOpenedModalId] = useState<number>()

    const closeModal = () => setOpenedModalId(0)

    return (
        <div className="app">
            <Button
                handleClick={() => setOpenedModalId(1)}
                label="Open success modal"
                type={ButtonType.PRIMARY}
            />

            <Modal
                title={firstModalTitle}
                description={firstModalDescription}
                isOpen={openedModalId === 1}
                status={ModalStatus.SUCCESS}
                onClose={closeModal}
                onContinue={() => setOpenedModalId(2)}
            />

            <Button
                handleClick={() => setOpenedModalId(2)}
                label="Open error modal"
                type={ButtonType.SECONDARY}
            />

            <Modal
                title={secondModalTitle}
                description={secondModalDescription}
                isOpen={openedModalId === 2}
                status={ModalStatus.ERROR}
                onClose={closeModal}
                onContinue={closeModal}
            />
        </div>
    )
}

export default App
