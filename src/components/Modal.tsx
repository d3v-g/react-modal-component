export default function Modal({ closeModal }: { closeModal: () => void }) {
    return (
        <>
            <h1>
                Congratulations! Your jet2 holiday booking has been confirmed
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sit amet vulputate turpis. Duis pharetra lorem a orci rutrum
                pulvinar. Sed vel iaculis nulla, sed ornare est. Nulla pretium
                aliquam rutrum. Aenean sollicitudin, tellus vitae dignissim
                sagittis, nisi nulla finibus nibh, nec fringilla nunc urna
                fermentum diam.
            </p>
            <button onClick={closeModal}>Cancel</button>
            <button onClick={closeModal}>Continue</button>
        </>
    )
}
