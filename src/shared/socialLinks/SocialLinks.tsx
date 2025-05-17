import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
    return (
        <ul className='flex justify-center gap-4 items-center h-10'>
            {/*<li className='w-10'>*/}
            {/*    <FontAwesomeIcon*/}
            {/*        className="cursor-pointer hover:scale-125 transition-transform"*/}
            {/*        icon={faWhatsapp}*/}
            {/*        size="2xl"*/}
            {/*        style={{ color: "#63E6BE" }}*/}
            {/*    />*/}
            {/*</li>*/}
            <li className='w-10'>
                <FontAwesomeIcon
                    className="cursor-pointer hover:scale-125 transition-transform"
                    icon={faTelegram}
                    size="2xl"
                    style={{ color: "#74C0FC" }}
                />
            </li>
        </ul>
    )
}

export default SocialLinks;