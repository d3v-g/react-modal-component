const Button: React.FC<{
    handleClick: () => void
    label: string
}> = ({ handleClick, label }) => {
    return <button onClick={handleClick}>{label}</button>
}

export default Button
