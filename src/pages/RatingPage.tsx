import { YMaps } from "@pbe/react-yandex-maps";
import GeoMap from "@/features/map/GeoMap";
import { useEffect, useState } from "react";
import { CoordinateType } from "@/features/map/model/types";
import UserInfo from "@/features/userInfo/userInfo";
import useUserStore from "@/shared/store/store";


export default function RatingPage() {
    const [userLocation, setUserLocation] = useState<CoordinateType | null>(null);
    const username = useUserStore(state => state.username);
    const city = useUserStore(state => state.city);
    const district = useUserStore(state => state.district);
    const rating = useUserStore(state => state.rating);
    const paramsList = useUserStore(state => state.params);
    const flawsList = useUserStore(state => state.flaws);

    useEffect(() => {
        if (!navigator.geolocation) {
            console.error("Geolocation не поддерживается");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation([latitude, longitude]);
            },
            (err) => {
                console.error("Ошибка геолокации:", err.message);
            }
        );
    }, []);

    return (
        <section className='rating mt-5 relative z-10'>
            <div className='rating__container container flex items-center justify-between'>
                <UserInfo
                    username={username}
                    city={city}
                    district={district}
                    rating={rating}
                    paramsList={paramsList}
                    flawsList={flawsList}
                />

                <div className="w-187.5 h-150 rounded-2xl">
                    <YMaps query={{ apikey: import.meta.env.VITE_MAP_PUBLIC_KEY }}>
                        <GeoMap userLocation={userLocation} />
                    </YMaps>
                </div>
            </div>
        </section>
    );
}
