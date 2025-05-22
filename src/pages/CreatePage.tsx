import useUserStore from "@/shared/store/store";
import {YMaps} from "@pbe/react-yandex-maps";
import GeoMap from "@/features/map/GeoMap";
import {useState} from "react";
import {InfoWrapper} from "@/shared/ui/infoWrapper/InfoWrapper";
import {Preferences} from "@/features/preferences/Preferences";
import {UserInfo} from "@/features/userInfo/userInfo";


export default function CreatePage() {
    const username = useUserStore(state => state.username);
    const phone = useUserStore(state => state.phone);
    const preferences = useUserStore(state => state.preferences)
    const [scanRadius, setScanRadius] = useState<number>(1000);


    return(
        <section className='create mt-5 relative z-10'>
            <div className='create__container container flex items-center justify-between'>
                <div className='create__container-left max-w-90 w-full'>
                    <InfoWrapper>
                        <UserInfo
                            username={username}
                            phone={phone}
                        />
                        <Preferences
                            preferenceList={preferences}
                            scanRadius={scanRadius}
                            setScanRadius={setScanRadius}
                        />
                    </InfoWrapper>
                </div>

                <div className="create__container-right w-187.5 h-150 rounded-2xl">
                    <YMaps query={{ apikey: import.meta.env.VITE_MAP_PUBLIC_KEY }}>
                        <GeoMap scanRadius={scanRadius} />
                    </YMaps>
                </div>
            </div>
        </section>
    )
}
