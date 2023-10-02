import "../styles/components/button.scss"
import { ButtonType } from "../enum/enum"

export interface IButtonProps {
    handleClick: () => void
    label: string
    type: ButtonType
}

const Button: React.FC<IButtonProps> = ({ handleClick, label, type }) => {
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
