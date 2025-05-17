import { ReactNode } from "react";

type ButtonProps = {
    text: string | ReactNode;
    active?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
};

export const Button = ({
                           text,
                           active = false,
                           onClick,
                           disabled = false,
                           variant = "primary",
                           className = ""
                       }: ButtonProps) => {
    // Базовые классы для кнопки
    const baseClasses = "cursor-pointer px-8 py-3 rounded-xl transition title-6";


    // Классы для разных вариантов
    const variantClasses = {
        primary: "hover:bg-white",
        secondary: "bg-[#5286ED] text-white hover:bg-blue-600",
        outline: "bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
    };

    // Состояния
    const activeClasses = active ? 'bg-white text-black shadow' : '';
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            style={{color: variant === 'secondary' ? '#ffffff': ""}}
            className={`
                ${baseClasses}
                ${variantClasses[variant]}
                ${activeClasses}
                ${disabledClasses}
                ${className}
            `}
        >
            {text}
        </button>
    );
};