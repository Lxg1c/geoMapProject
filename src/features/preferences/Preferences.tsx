import {useState} from "react";
import {PreferencesProps} from "@/features/userInfo/models/types";
import {Slider} from "@/shared/ui/slider/Slider";
import {Button} from "@/shared/ui/button/Button";

export const Preferences = ({ preferenceList, scanRadius, setScanRadius }: PreferencesProps) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    if (!preferenceList?.length) return null;

    return (
        <div className="preference__info gap-2">
            <h2 className="title-2">Предпочтение</h2>
            <ul className="preference__list flex mt-5 flex-col gap-3">
                {preferenceList.map((item) => (
                    <li key={item} className="flex items-center justify-between">
                        <h4 className="title-4">{item}</h4>
                        <input
                            type="checkbox"
                            checked={selectedItems.includes(item)}
                            onChange={() => setSelectedItems(prev =>
                                prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
                            )}
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