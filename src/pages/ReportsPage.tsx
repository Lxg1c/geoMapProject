import useUserStore from "@/shared/store/store";
import { InfoWrapper } from "@/shared/ui/infoWrapper/InfoWrapper";
import { PositionInfo } from "@/features/PositionInfo/PositionInfo";
import { YMaps } from "@pbe/react-yandex-maps";
import GeoMap from "@/features/map/GeoMap";
import { UserInfo } from "@/features/userInfo/userInfo";
import { useState } from "react";
import { FormControlLabel, Switch } from "@mui/material";

export default function ReportsPage() {
    const username = useUserStore(state => state.username);
    const city = useUserStore(state => state.city);
    const district = useUserStore(state => state.district);
    const rating = useUserStore(state => state.rating);
    const paramsList = useUserStore(state => state.params);
    const flawsList = useUserStore(state => state.flaws);
    const userClusterPoints = useUserStore(state => state.userClusterPoints);
    const otherClusterPoint = useUserStore(state => state.othersClusterPoints);

    const [clusterSwitch, setClusterSwitch] = useState<boolean>(false);

    const handleClusterSwitch = () => {
        setClusterSwitch(!clusterSwitch);
    }

    return (
        <section className='report mt-5 relative z-10'>
            <div className='report__container container flex items-center justify-between'>
                <div className='report__container-left max-w-90'>
                    <InfoWrapper>
                        <UserInfo username={username} />
                        <PositionInfo
                            city={city}
                            district={district}
                            rating={rating}
                            paramsList={paramsList}
                            flawsList={flawsList}
                        />
                    </InfoWrapper>
                </div>

                <div className="report__container-right w-187.5 h-150 rounded-2xl relative">
                    <FormControlLabel
                        className='absolute text-center top-2 right-20 z-10 bg-green-500/30 backdrop-blur-sm py-1 px-3 rounded-2xl w-50'
                        control={
                            <Switch
                                checked={clusterSwitch}
                                onChange={handleClusterSwitch}
                            />
                        }
                        label={clusterSwitch ? "Мои отчеты" : "Отчеты других"}
                        labelPlacement="start"
                    />
                    <YMaps query={{ apikey: import.meta.env.VITE_MAP_PUBLIC_KEY }}>

                        <GeoMap
                            scanRadius={500}
                            usePlacemark={false}
                            clusterPoints={clusterSwitch ? userClusterPoints : otherClusterPoint}
                        />
                    </YMaps>
                </div>
            </div>
        </section>
    )
}