import { create } from "zustand";

interface UserParam {
    name: string;
    value: number;
}

type ClusterPoint = [number, number];

interface UserState {
    username: string;
    phone: string;
    city: string;
    district: string;
    rating: number;
    params: UserParam[];
    flaws: string[];
    preferences: string[];
    userClusterPoints: ClusterPoint[];
    othersClusterPoints: ClusterPoint[];
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
    preferences: [
        "Больница",
        "Школы",
        "Кафе/рестораны",
        "Ночная жизнь",
        "Езда на велосипеде",
        "Море"
    ],
    userClusterPoints: [
        [47.244564, 39.710932],
        [47.23768, 39.6998],
        [47.23333, 39.70791],
        [45, 39]
    ],
    othersClusterPoints: [
        [40, 40],
        [50.23768, 45.6998],
    ],
    isAuth: false,

    // Методы для обновления состояния
    setUsername: (newName) => set({ username: newName }),
    setPhone: (newPhone) => set({ phone: newPhone }),
    login: () => set({ isAuth: true }),
    logout: () => set({ isAuth: false, username: "Гость", phone: "" }),
}));

export default useUserStore;