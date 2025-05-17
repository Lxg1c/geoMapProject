import userIcon from "@/assets/userIcon.svg";
import {UserInfoProps} from "@/features/userInfo/models/types";


export const UserInfo = ({ username, phone }: UserInfoProps) => {
    return (
        <div className="space-y-5">
            <div className="user__profile flex items-end gap-5">
                <img
                    src={userIcon}
                    width={80}
                    height={80}
                    alt="Аватар пользователя"
                    className="rounded-full"
                />
                <div>
                    <h2 className="title-2">{username}</h2>
                    <p className="title-7 mt-1.5">Имя пользователя</p>
                </div>
            </div>

            {phone && (
                <div className="user__contact">
                    <h2 className="title-5">{phone}</h2>
                    <p className="title-7 mt-1.5">Номер телефона</p>
                </div>
            )}
        </div>
    );
};

