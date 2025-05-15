import {HeaderNav} from "@/widgets/header/ui/HeaderNav";
import SocialLinks from "@/shared/socialLinks/SocialLinks";


const Header = () => {
    return (
        <header className="header w-full flex justify-center pt-10 pb-10">
            <div className="header__container container max-w-175 flex justify-center gap-5 relative">
                <HeaderNav />
                <div className="header__social absolute right-[50px] z-10">
                    <SocialLinks />
                </div>
            </div>
        </header>
    );
};

export default Header;