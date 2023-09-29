import { useState } from "react"
import "./styles/app.scss"
import { ButtonType } from "./enum/enum"
import Button from "./components/Button"
import Modal from "./components/Modal"

function App() {
    const firstModalTitle =
        "Congratulations! Your jet2 holiday booking has been confirmed"
    const secondModalTitle =
        "Congratulations! Your jet2 holiday booking has been confirmed"

    const firstModalDescription =
        "Lorem ipsum dolor sit amet, consectetur\
        adipiscing elit. Aliquam sit amet vulputate\
        turpis. Duis pharetra lorem a orci rutrum\
        pulvinar. Sed vel iaculis nulla, sed ornare est.\
        Nulla pretium aliquam rutrum. Aenean\
        sollicitudin, tellus vitae dignissim sagittis,\
        nisi nulla finibus nibh, nec fringilla nunc urna\
        fermentum diam."
    const secondModalDescription =
        "Lorem ipsum dolor sit amet, consectetur\
        adipiscing elit. Aliquam sit amet vulputate\
        turpis. Duis pharetra lorem a orci rutrum\
        pulvinar. Sed vel iaculis nulla, sed ornare est.\
        Nulla pretium aliquam rutrum. Aenean\
        sollicitudin, tellus vitae dignissim sagittis,\
        nisi nulla finibus nibh, nec fringilla nunc urna\
        fermentum diam."

    const [openedModalId, setOpenedModalId] = useState<number>()

    return (
        <div className="app">
            <Button
                handleClick={() => setOpenedModalId(1)}
                label="Open first modal"
                type={ButtonType.PRIMARY}
            />

            <Modal
                title={firstModalTitle}
                description={firstModalDescription}
                isOpen={openedModalId === 1}
            >
                <Button
                    handleClick={() => setOpenedModalId(0)}
                    label="Cancel"
                    type={ButtonType.SECONDARY}
                />
                <Button
                    handleClick={() => setOpenedModalId(2)}
                    label="Continue"
                    type={ButtonType.PRIMARY}
                />
            </Modal>

            <Button
                handleClick={() => setOpenedModalId(2)}
                label="Open second modal"
                type={ButtonType.SECONDARY}
            />

            <Modal
                title={secondModalTitle}
                description={secondModalDescription}
                isOpen={openedModalId === 2}
            >
                <Button
                    handleClick={() => setOpenedModalId(0)}
                    label="Cancel"
                    type={ButtonType.SECONDARY}
                />
                <Button
                    handleClick={() => setOpenedModalId(1)}
                    label="Continue"
                    type={ButtonType.PRIMARY}
                />
            </Modal>
        </div>
    )
}

export default App
