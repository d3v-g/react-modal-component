import "./App.scss"
import Button from "./components/Button"
import Modal from "./components/Modal"
import ModalController from "./components/ModalController"

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

    return (
        <div className="app">
            <ModalController
                controlElement={(handleClick) => (
                    <Button
                        handleClick={handleClick}
                        label="Open first modal"
                    />
                )}
                modalElement={(handleClose) => (
                    <Modal
                        title={firstModalTitle}
                        description={firstModalDescription}
                    >
                        <div className="modal__buttons">
                            <button onClick={handleClose}>Cancel</button>
                            <button onClick={handleClose}>Continue</button>
                        </div>
                    </Modal>
                )}
            />

            <ModalController
                controlElement={(handleClick) => (
                    <Button
                        handleClick={handleClick}
                        label="Open second modal"
                    />
                )}
                modalElement={(handleClose) => (
                    <Modal
                        title={secondModalTitle}
                        description={secondModalDescription}
                    >
                        <div className="modal__buttons">
                            <button onClick={handleClose}>Cancel</button>
                            <button onClick={handleClose}>Continue</button>
                        </div>
                    </Modal>
                )}
            />
        </div>
    )
}

export default App
