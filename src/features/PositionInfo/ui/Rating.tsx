import StarImage from "@/assets/star.svg";
import {RatingProps} from "@/features/PositionInfo/model/types";



const Rating = ({ rating }: RatingProps) => {
    const stars = Array(5).fill(0);

    return (
        <div className="flex items-center" aria-label={`Рейтинг: ${rating} из 5`}>
            {stars.map((_, i) => (
                <img
                    src={StarImage}
                    key={i}
                    width={15}
                    height={15}
                    alt={i < rating ? "Заполненная звезда" : "Пустая звезда"}
                    className={i < rating ? "opacity-100" : "opacity-30"}
                />
            ))}
        </div>
    );
};

export default Rating;