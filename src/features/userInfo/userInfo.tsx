import userIcon from "@/assets/userIcon.svg";
import { UserInfoProps } from "@/features/userInfo/models/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faCheck } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";
import { Input } from "@mui/material";
import useUserStore from "@/shared/store/store";

export const UserInfo = ({ username: initialUsername, phone: initialPhone }: UserInfoProps) => {
    const [isChanging, setIsChanging] = useState<boolean>(false);
    const [localPhone, setLocalPhone] = useState<string>(initialPhone || "");
    const [localName, setLocalName] = useState<string>(initialUsername);
    const { setUsername, setPhone } = useUserStore();

    const handleChange = () => {
        setIsChanging(!isChanging);
    };

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLocalName(event.target.value);
    };

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLocalPhone(event.target.value);
    };

    const handleSave = () => {
        setUsername(localName);
        setPhone(localPhone);
        handleChange();
    };

    return (
        <div className="space-y-5">
            <div className="user__profile flex items-end gap-5 relative">
                <img
                    src={userIcon}
                    width={80}
                    height={80}
                    alt="Аватар пользователя"
                    className="rounded-full"
                />
                <div>
                    {isChanging ? (
                        <Input
                            placeholder='Имя пользователя'
                            value={localName}
                            onChange={handleUsernameChange}
                        />
                    ) : (
                        <>
                            <h2 className="title-2">{localName}</h2>
                            <p className="title-7 mt-1.5">Имя пользователя</p>
                        </>
                    )}
                </div>

                <div className="absolute right-0 top-2.5">
                    {isChanging ? (
                        <FontAwesomeIcon
                            onClick={handleSave}
                            icon={faCheck}
                            size='lg'
                            className='cursor-pointer text-green-500 hover:text-green-700'
                        />
                    ) : (
                        <FontAwesomeIcon
                            onClick={handleChange}
                            icon={faPencil}
                            size='lg'
                            className='cursor-pointer text-blue-500 hover:text-blue-700'
                        />
                    )}
                </div>
            </div>

            {initialPhone && (
                isChanging ? (
                    <Input
                        placeholder="Номер телефона"
                        value={localPhone}
                        onChange={handlePhoneChange}
                    />
                ) : (
                    <div className="user__contact">
                        <h2 className="title-5">{localPhone}</h2>
                        <p className="title-7 mt-1.5">Номер телефона</p>
                    </div>
                )
            )}
        </div>
    );
};