import "./App.css"
import Button from "./components/Button"
import Modal from "./components/Modal"
import ModalController from "./components/ModalController"

function App() {
    return (
        <div>
            <ModalController
                controlElement={(handleClick) => (
                    <Button
                        handleClick={handleClick}
                        label="Open first modal"
                    />
                )}
                modalElement={(handleClose) => (
                    <Modal
                        title="Congratulations! Your jet2 holiday booking has
                        been confirmed"
                        description="Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Aliquam sit amet vulputate
                        turpis. Duis pharetra lorem a orci rutrum
                        pulvinar. Sed vel iaculis nulla, sed ornare est.
                        Nulla pretium aliquam rutrum. Aenean
                        sollicitudin, tellus vitae dignissim sagittis,
                        nisi nulla finibus nibh, nec fringilla nunc urna
                        fermentum diam."
                    >
                        <button onClick={handleClose}>Cancel</button>
                        <button onClick={handleClose}>Continue</button>
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
                        title="Congratulations! Your jet2 holiday booking has
                        been confirmed"
                        description="Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Aliquam sit amet vulputate
                        turpis. Duis pharetra lorem a orci rutrum
                        pulvinar. Sed vel iaculis nulla, sed ornare est.
                        Nulla pretium aliquam rutrum. Aenean
                        sollicitudin, tellus vitae dignissim sagittis,
                        nisi nulla finibus nibh, nec fringilla nunc urna
                        fermentum diam."
                    >
                        <button onClick={handleClose}>Cancel</button>
                        <button onClick={handleClose}>Continue</button>
                    </Modal>
                )}
            />
        </div>
    )
}

export default App
