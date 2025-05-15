type FlawsProps = {
    flawList: string[]
}

const FlawsList = ({flawList}: FlawsProps ) => {
    if (flawList.length === 0) return 12345;

    return(
        <>
            <h5 className="title-5 mt-10">Недостатки:</h5>
            <div className="space-y-3">
                {flawList.map((flaw) => (
                    <div
                        key={flaw}
                        className="flaw__item flex justify-between items-center"
                    >
                        <h5 className="title-5"><span className='title-7 pr-3'>-</span>{flaw}</h5>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FlawsList;