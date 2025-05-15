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
import { useState } from "react";
import {IGeocodeResult} from "yandex-maps";
import { IAdress, CoordinateType, GeoMapProps } from "@/features/map/model/types";

const MapStyled = styled(Map)`
    width: 750px;
    height: 600px;
`;



export default function GeoMap({ userLocation }: GeoMapProps) {
    const [coordinates, setCoordinates] = useState<CoordinateType | null>(null);
    const [address, setAddress] = useState<IAdress | null>(null);
    const [userRadius] = useState<number>(100);

    const clusterPoints: CoordinateType[] = [
        [47.244564, 39.710932],
        [47.23768, 39.6998],
        [47.23333, 39.70791],
        [45, 39]
    ];

    const ymaps = useYMaps(["geocode"]);

    const handleClickMap = (e: any) => {
        const coords = e.get("coords") as CoordinateType;

        if (coords) {
            setCoordinates(coords);
        }

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
            const location = String(properties.get("description", {}));
            const route = String(properties.get("name", {}));

            return { location, route };
        }
    }

    return (
        <MapStyled
            defaultState={{ center: [47.2313, 39.7233], zoom: 9 }}
            onClick={handleClickMap}
        >
            {coordinates && <Placemark geometry={coordinates} />}
            <Clusterer
                options={{
                    preset: "islands#invertedVioletClusterIcons",
                    groupByCoordinates: false,
                }}
            >
                {clusterPoints.map((coordinates, index) => (
                    <Placemark
                        key={index}
                        geometry={coordinates}
                    />
                ))}
            </Clusterer>
            <FullscreenControl />
            <GeolocationControl />
            <ZoomControl />
            {userLocation && (
                <Circle
                    geometry={[userLocation, userRadius]}
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
            <ObjectManager />
        </MapStyled>
    );
}
