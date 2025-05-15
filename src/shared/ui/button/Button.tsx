type ButtonProps = {
    text: string
    active?: boolean
    onClick?: () => void
    disable?: boolean
}

export const Button = ({ text, active = false, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer px-4 py-2 rounded-xl transition title-6 ${
                active ? 'bg-white text-black shadow' : ''
            }`}
        >
            {text}
        </button>
    )
}