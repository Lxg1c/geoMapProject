import {InfoWrapperProps} from "@/features/userInfo/models/types";

export const InfoWrapper = ({ children, className = "w-full space-y-5" }: InfoWrapperProps) => {
    return (
        <form
            className={`p-10 bg-white/30 backdrop-blur-sm rounded-xl shadow-md ${className}`}
            aria-label="Информация о пользователе"
        >
            {children}
        </form>
    );
};