import useUserStore from "@/shared/store/store";
import {InfoWrapper} from "@/shared/ui/InfoWrapper/InfoWrapper";
import {PositionInfo} from "@/features/PositionInfo/PositionInfo";
import {UserInfo} from "@/features/userInfo/userInfo";
import {Table} from "@/shared/ui/table/Table";


export default function RatingPage() {
    const username = useUserStore(state => state.username);
    const city = useUserStore(state => state.city);
    const district = useUserStore(state => state.district);
    const rating = useUserStore(state => state.rating);
    const paramsList = useUserStore(state => state.params);
    const flawsList = useUserStore(state => state.flaws);

    const districts = [
        { name: "Центр города", rating: 96, offices: 48, airQuality: 60, safety: 82 },
        { name: "Кировский", rating: 96, offices: 48, airQuality: 60, safety: 82 },
        { name: "Северный", rating: 96, offices: 48, airQuality: 60, safety: 82 },
        { name: "Советский", rating: 96, offices: 48, airQuality: 60, safety: 82 },
        { name: "Ворошиловский", rating: 96, offices: 48, airQuality: 60, safety: 82 },
    ];

    return (
        <section className='rating mt-5 relative z-10'>
            <div className='rating__container container flex justify-between'>
                <div className='rating__container-left max-w-90 w-full'>
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

                <div className="rating__container-right w-187.5 h-150 rounded-2xl">
                    <InfoWrapper>
                        <Table data={districts} />
                    </InfoWrapper>
                </div>
            </div>
        </section>
    );
}
