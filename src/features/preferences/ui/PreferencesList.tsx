import { useState } from 'react';
import {PreferencesListProps} from "@/features/preferences/models/types";
import {PreferencesItem} from "@/features/preferences/ui/PreferencesItem";
import {Slider} from "@/shared/ui/slider/Slider";


export const PreferencesList = ({ preferenceList }: PreferencesListProps) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [value, setValue] = useState(50);

    if (!preferenceList?.length) return null;

    const handleCheckboxChange = (item: string) => {
        setSelectedItems(prev =>
            prev.includes(item)
                ? prev.filter(i => i !== item)
                : [...prev, item]
        );
    };

    return (
        <div className="preference__info gap-2">
            <h2 className="title-2">Предпочтение</h2>
            <ul className="preference__list flex mt-5 flex-col gap-3">
                {preferenceList.map((item) => (
                    <PreferencesItem
                        key={item}
                        item={item}
                        selectedItems={selectedItems}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                ))}
            </ul>
            <h5 className='title-7 mt-3'>Радиус анализа</h5>
            <Slider
            min={0}
            max={100}
            value={value}
            onChange={setValue}
            />
        </div>
    );
};