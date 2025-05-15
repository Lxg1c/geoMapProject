import StarImage from "@/assets/star.svg";


type RatingProps = {
    rating: number;
};


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