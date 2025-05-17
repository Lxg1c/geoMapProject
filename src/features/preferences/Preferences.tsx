import { useState } from "react";
import { PreferencesProps } from "@/features/userInfo/models/types";
import { Slider } from "@/shared/ui/slider/Slider";
import { Button } from "@/shared/ui/button/Button";
import { Checkbox } from "@/shared/ui/checkbox/Checkbox"; // Импортируем ваш компонент

export const Preferences = ({ preferenceList, scanRadius, setScanRadius }: PreferencesProps) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    if (!preferenceList?.length) return null;

    const handleCheckboxChange = (item: string) => {
        setSelectedItems(prev =>
            prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
    };

    return (
        <div className="preference__info gap-2">
            <h2 className="title-2">Предпочтение</h2>
            <ul className="preference__list flex mt-5 flex-col gap-3">
                {preferenceList.map((item) => (
                    <li key={item} className="flex items-center justify-between">
                        <h4 className="title-4">{item}</h4>
                        <Checkbox
                            checked={selectedItems.includes(item)}
                            onChange={() => handleCheckboxChange(item)}
                        />
                    </li>
                ))}
            </ul>
            <h5 className="title-7 mt-6">Радиус анализа</h5>
            <Slider
                min={0}
                max={2000}
                value={scanRadius}
                onChange={setScanRadius}
            />

            <div className='button__container text-center'>
                <Button variant='secondary' text='Скачать отчет'/>
            </div>
        </div>
    );
};