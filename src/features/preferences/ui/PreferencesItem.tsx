import {Checkbox} from "@/shared/ui/checkbox/Checkbox";
import {IPreferencesItem} from "@/features/preferences/models/types";


export const PreferencesItem = ({ item, selectedItems, handleCheckboxChange }: IPreferencesItem) => {
    return (
        <li className='preference__item flex items-center justify-between'>
            <h4 className='title-4'>{item}</h4>
            <Checkbox
                checked={selectedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
            />
        </li>
    );
};