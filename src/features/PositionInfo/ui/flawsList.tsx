import {FlawsProps} from "@/features/PositionInfo/model/types";

const FlawsList = ({flawList}: FlawsProps ) => {
    if (flawList.length === 0) return;

    return(
        <>
            <h5 className="title-5 mt-6">Предпочтения</h5>
            <ul className='flaws__list mt-4 space-y-6'>
                {flawList.map((item, index) => (
                    <li key={`flaw-${index}-${item}`} className="flaws__item">
                        <h5 className="title-5"><span className='title-7 mr-4'>-</span>{item}</h5>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FlawsList;