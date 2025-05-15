import userIcon from "@/assets/userIcon.svg";
import ParamsList, {ParamItem} from "@/features/userInfo/ui/paramsList/paramsList";
import Rating from "@/features/userInfo/ui/rating/Rating";
import FlawsList from "@/features/userInfo/ui/flawsList/flawsList";

type UserFormProps = {
    username: string;
    phone?: string;
    city: string;
    district: string;
    rating: number;
    paramsList?: ParamItem[];
    flawsList?: string[]
};


const UserInfo = ({
                      username,
                      phone,
                      city,
                      district,
                      rating,
                      paramsList = [],
                      flawsList = []
                  }: UserFormProps) => {
    return (
        <form
            className="form p-10 bg-white/30 backdrop-blur-sm rounded-xl shadow-md flex items-center justify-between"
            aria-label="Информация о пользователе"
        >
            <div className="user__info space-y-5">
                <div className="user__profile flex items-end gap-5">
                    <img
                        src={userIcon}
                        width={80}
                        height={80}
                        alt="Аватар пользователя"
                    />
                    <div className="user__name">
                        <h2 className="title-2">{username}</h2>
                        <p className="title-7 mt-1.5">Имя пользователя</p>
                    </div>
                </div>

                {phone && (
                    <div className="user__phone">
                        <h2 className="title-5">{phone}</h2>
                        <p className="title-7 mt-1.5">Номер телефона</p>
                    </div>
                )}

                <div className="flex flex-wrap gap-2">
                    <div className="location__info-city bg-white p-2.5 rounded-3xl flex items-center gap-2">
                        <h5 className="title-5">{city}</h5>
                    </div>
                    <div className="location__info-district bg-white p-2.5 rounded-3xl flex items-center gap-2">
                        <h5 className="title-5">{district}</h5>
                    </div>
                </div>

                <div className="ratting__info bg-white p-2.5 rounded-3xl flex items-center gap-2 max-w-42.5">
                    <h5 className="title-5">Рейтинг:</h5>
                    <Rating rating={rating} />
                </div>

                <ParamsList paramList={paramsList} />

                <FlawsList flawList={flawsList} />
            </div>
        </form>
    );
};

export default UserInfo;