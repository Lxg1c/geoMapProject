export type FlawsProps = {
    flawList: string[]
}

export type ParamsProps = {
    paramList: ParamItem[];
};

export type ParamItem = {
    name: string;
    value: number;
};

export type RatingProps = {
    rating: number;
};