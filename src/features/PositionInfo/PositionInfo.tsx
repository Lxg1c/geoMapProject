import { PositionInfoProps } from "@/features/userInfo/models/types";
import Rating from "@/features/PositionInfo/ui/Rating";
import ParamsList from "@/features/PositionInfo/ui/paramsList";
import FlawsList from "@/features/PositionInfo/ui/flawsList";

export const PositionInfo = ({ city, district, rating, paramsList, flawsList }: PositionInfoProps) => {
    return (
        <div className="space-y-2.5 mt-5">
            {(city || district) && (
                <div className="location__info">
                    <div className="flex flex-wrap gap-2">
                        {city && (
                            <div className="bg-white p-2.5 rounded-3xl">
                                <h5 className="title-5">{city}</h5>
                            </div>
                        )}
                        {district && (
                            <div className="bg-white p-2.5 rounded-3xl">
                                <h5 className="title-5">{district}</h5>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {rating !== undefined && (
                <div className="rating__info bg-white p-2.5 rounded-3xl max-w-max">
                    <h3 className="title-5 flex items-center gap-2">
                        Рейтинг: <Rating rating={rating} />
                    </h3>
                </div>
            )}

            {paramsList && paramsList.length > 0 && (
                <ParamsList paramList={paramsList} />
            )}

            {flawsList && flawsList.length > 0 && (
                <FlawsList flawList={flawsList} />
            )}
        </div>
    );
};