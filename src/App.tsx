import "./App.css"
import Button from "./components/Button"
import Modal from "./components/Modal"
import ModalController from "./components/ModalController"

function App() {
    return (
        <>
            <div>
                {/* using inline JSX elements as props */}
                <ModalController
                    controlElement={(handleClick) => (
                        <button onClick={handleClick}>Open first modal</button>
                    )}
                    modalElement={(handleClose) => (
                        <>
                            <h1>
                                Congratulations! Your jet2 holiday booking has
                                been confirmed
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aliquam sit amet vulputate
                                turpis. Duis pharetra lorem a orci rutrum
                                pulvinar. Sed vel iaculis nulla, sed ornare est.
                                Nulla pretium aliquam rutrum. Aenean
                                sollicitudin, tellus vitae dignissim sagittis,
                                nisi nulla finibus nibh, nec fringilla nunc urna
                                fermentum diam.
                            </p>
                            <button onClick={handleClose}>Cancel</button>
                            <button onClick={handleClose}>Continue</button>
                        </>
                    )}
                />

                {/* using JSX components as props */}
                <ModalController
                    controlElement={(handleClick) => (
                        <Button
                            handleClick={handleClick}
                            label="Open second modal"
                        />
                    )}
                    modalElement={(handleClose) => (
                        <Modal closeModal={handleClose} />
                    )}
                />
            </div>
        </>
    )
}

export default App
