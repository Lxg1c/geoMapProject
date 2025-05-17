import {
    Circle,
    Clusterer,
    FullscreenControl,
    GeolocationControl,
    Map,
    ObjectManager,
    Placemark,
    useYMaps,
    ZoomControl
} from "@pbe/react-yandex-maps";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { IGeocodeResult } from "yandex-maps";
import { IAdress, CoordinateType, GeoMapProps, IMap } from "@/features/map/model/types";
import { getUserPosition } from "@/shared/lib/geo-position";

const MapStyled = styled(Map)`
    width: 750px;
    height: 600px;
    border-radius: 20px;
    overflow: hidden;
`;

export default function GeoMap({ scanRadius = 500, clusterPoints, usePlacemark = true }: GeoMapProps) {
    const [userLocation, setUserLocation] = useState<CoordinateType | null>(null);
    const [coordinates, setCoordinates] = useState<CoordinateType | null>(null);
    const [address, setAddress] = useState<IAdress | null>(null);

    const ymaps = useYMaps(["geocode"]);

    useEffect(() => {
        const fetchUserPosition = async () => {
            try {
                const [lat, lng] = await getUserPosition();
                return [lat, lng];
            } catch (error) {
                console.error(error);
                return null;
            }
        };

        fetchUserPosition().then((r) => {
            if (Array.isArray(r) && r.length === 2) {
                setUserLocation(r as CoordinateType);
            }
        });
    }, []);

    const handleClickMap = (e: IMap) => {
        const coords = e.get("coords") as CoordinateType;
        if (coords) setCoordinates(coords);

        ymaps?.geocode(coords)
            .then((result) => {
                const foundAddress = handleGeoLocation(result);
                if (foundAddress) setAddress(foundAddress);
            })
            .catch(console.error);
    };

    function handleGeoLocation(result: IGeocodeResult): IAdress | undefined {
        const firstGeoObject = result.geoObjects.get(0);
        if (firstGeoObject) {
            const properties = firstGeoObject.properties;
            const location = String(properties.get("description", {}))
            const route = String(properties.get("name", {}));
            return { location, route };
        }
    }

    const placeMarkTemplate = (coords: CoordinateType): string => {
        return `
            <div style="padding: 10px; border-radius: 20px">
                <h3 style="margin: 0 0 10px 0">Информация</h3>
                <p>Координаты: ${coords.join(", ")}</p>
                ${address ? `<p>Адрес: ${address.location}, ${address.route}</p>` : ""}
            </div>
        `;
    };

    return (
        <MapStyled
            defaultState={{ center: [47.2313, 39.7233], zoom: 9 }}
            onClick={handleClickMap}
        >
            {coordinates && usePlacemark && <Placemark geometry={coordinates} />}

            {clusterPoints && (
                <Clusterer
                    options={{
                        preset: "islands#invertedVioletClusterIcons",
                        groupByCoordinates: false,
                    }}
                >
                    {clusterPoints.map((coords, index) => (
                        <Placemark
                            key={index}
                            geometry={coords}
                            options={{
                                preset: "islands#circleIcon",
                                iconColor: "#735184",
                                openHintOnHover: true,
                                openBalloonOnClick: true,
                                hideIconOnBalloonOpen: false
                            }}
                            properties={{
                                hintContent: "Нажмите для подробностей",
                                balloonContentHeader: `Место #${index + 1}`,
                                balloonContentBody: placeMarkTemplate(coords),
                                balloonContentFooter: "<small>Данные предоставлены сервисом</small>"
                            }}
                            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                        />
                    ))}
                </Clusterer>
            )}

            {userLocation && usePlacemark && (
                <Circle
                    geometry={[coordinates || userLocation, scanRadius]}
                    options={{
                        draggable: false,
                        fillColor: "#7A8BDD",
                        strokeColor: "#7A8BDD",
                        opacity: 0.5,
                        strokeOpacity: 0.8,
                        strokeWidth: 5,
                    }}
                />
            )}

            <FullscreenControl />
            <GeolocationControl />
            <ZoomControl />
            <ObjectManager />
        </MapStyled>
    );
}
