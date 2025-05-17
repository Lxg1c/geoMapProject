import {ParamsProps} from "@/features/PositionInfo/model/types";


const ParamsList = ({ paramList }: ParamsProps) => {
    if (paramList.length === 0) return null;

    return (
        <ul className='params__list space-y-6 mt-5'>
            {paramList.map((item) => (
                <li key={`param-${item.name}`} className="params__item flex items-center justify-between">
                    <h5 className="title-5">{item.name}</h5>
                    <h5 className='title-7'>{item.value}/100</h5>
                </li>
            ))}
        </ul>
    );
};

export default ParamsList;