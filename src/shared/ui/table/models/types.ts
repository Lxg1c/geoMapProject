export interface TableData {
    name: string;
    rating: number;
    offices: number;
    airQuality: number;
    safety: number;
}

export interface TableProps {
    data: TableData[];
}