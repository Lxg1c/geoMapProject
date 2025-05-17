import React from "react";

export type UserInfoProps = {
    username: string;
    phone?: string;
};

type paramItem = { name: string; value: number };

export type PositionInfoProps = {
    city?: string;
    district?: string;
    rating?: number;
    paramsList?: paramItem[];
    flawsList?: string[];
};

export type PreferencesProps = {
    preferenceList?: string[];
    scanRadius: number;
    setScanRadius: (value: number) => void;
};

export type InfoWrapperProps = {
    children: React.ReactNode;
    className?: string;
};