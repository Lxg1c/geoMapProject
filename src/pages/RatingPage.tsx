import '../App.css'
import {YMaps} from "@pbe/react-yandex-maps";
import GeoMap from "@/features/map/Map";
import {useEffect, useState} from "react";


function Rating() {
    const [userLocation, setUserLocation] = useState<CoordinateType | null>(null)

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
      <div className="map__container rounded-2xl">
          <YMaps query={{apikey: `${import.meta.env.VITE_MAP_PUBLIC_KEY}`}}>
              <GeoMap userLocation={userLocation}/>
          </YMaps>
      </div>
  )
}

export default Rating;
