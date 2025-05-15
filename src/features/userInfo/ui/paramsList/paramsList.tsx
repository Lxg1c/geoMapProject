type ParamsProps = {
    paramList: ParamItem[];
};

export type ParamItem = {
    name: string;
    value: number;
};

const ParamsList = ({ paramList }: ParamsProps) => {
    if (paramList.length === 0) return null;

    return (
        <div className="space-y-8">
            {paramList.map((param) => (
                <div
                    key={param.name}
                    className="flaw__item flex justify-between items-center"
                >
                    <h5 className="title-5">{param.name}</h5>
                    <span className="title-7">{param.value} / 100</span>
                </div>
            ))}
        </div>
    );
};

export default ParamsList;