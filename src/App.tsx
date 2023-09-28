import { useState } from "react"
import "./App.scss"
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
            />

            <Modal
                title={firstModalTitle}
                description={firstModalDescription}
                isOpen={openedModalId === 1}
            >
                <button onClick={() => setOpenedModalId(0)}>Cancel</button>
                <button onClick={() => setOpenedModalId(2)}>Continue</button>
            </Modal>

            <Button
                handleClick={() => setOpenedModalId(2)}
                label="Open second modal"
            />

            <Modal
                title={secondModalTitle}
                description={secondModalDescription}
                isOpen={openedModalId === 2}
            >
                <button onClick={() => setOpenedModalId(0)}>Cancel</button>
                <button onClick={() => setOpenedModalId(1)}>Continue</button>
            </Modal>
        </div>
    )
}

export default App
