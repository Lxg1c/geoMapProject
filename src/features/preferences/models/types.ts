export type PreferencesListType = string[]

export interface PreferencesListProps {
    preferenceList: PreferencesListType;
}

export interface IPreferencesItem {
    item: string;
    selectedItems: string[];
    handleCheckboxChange: (item: string) => void;
}
