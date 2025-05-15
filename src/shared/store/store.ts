import { create } from "zustand";

interface UserParam {
    name: string;
    value: number;
}

interface UserState {
    username: string;
    phone: string;
    city: string;
    district: string;
    rating: number;
    params: UserParam[];
    flaws: string[];
    isAuth: boolean;
    setUsername: (newName: string) => void;
    setPhone: (newPhone: string) => void;
    login: () => void;
    logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
    // Начальное состояние
    username: "Никита",
    phone: "+79281484862",
    city: "г. Ростов-на-Дону",
    district: "р-он Кировский",
    rating: 5,
    params: [
        { name: "Экология", value: 68 },
        { name: "Транспорт", value: 82 },
        { name: "Инфраструктура", value: 85 },
        { name: "Безопасность", value: 73 },
        { name: "Стоимость жилья", value: 70 }
    ],
    flaws: [
        "дефицит парковок",
        "шум от проезжей части"
    ],
    isAuth: false,

    // Методы для обновления состояния
    setUsername: (newName) => set({ username: newName }),
    setPhone: (newPhone) => set({ phone: newPhone }),
    login: () => set({ isAuth: true }),
    logout: () => set({ isAuth: false, username: "Гость", phone: "" }),
}));

export default useUserStore;