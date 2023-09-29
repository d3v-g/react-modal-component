import "../styles/components/button.scss"
import { ButtonType } from "../enum/enum"

const Button: React.FC<{
    handleClick: () => void
    label: string
    type: ButtonType
}> = ({ handleClick, label, type }) => {
    return (
        <button
            className={
                "btn " +
                (type === ButtonType.PRIMARY
                    ? "btn--primary"
                    : "btn--secondary")
            }
            onClick={handleClick}
        >
            {label}
        </button>
    )
}

export default Button
