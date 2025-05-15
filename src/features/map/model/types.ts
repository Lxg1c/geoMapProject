export type CoordinateType = [number, number];

export interface IAdress {
    location: string;
    route: string;
}

export interface IMap {
    get: (key: string) => CoordinateType
}

export interface GeoMapProps {
    userLocation: CoordinateType | null;
}