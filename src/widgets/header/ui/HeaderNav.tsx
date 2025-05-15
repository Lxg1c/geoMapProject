import { Link, useLocation } from 'react-router-dom';
import {Button} from "@/shared/ui/button/Button";

const HeaderNav = () => {
    const location = useLocation(); // Получаем текущий путь из react-router

    // Определяем активную страницу на основе пути
    const getActivePage = () => {
        const path = location.pathname;
        if (path === "/") return 1;
        if (path === "/rating") return 2;
        if (path === "/report") return 3;
        if (path === "/about") return 4;
        if (path === "/profile") return 5;
        return 0;
    };

    return (
        <nav>
            <ul className="flex">
                <li>
                    <Link to="/">
                        <   Button text="Создать" active={getActivePage() === 1} />
                    </Link>
                </li>
                <li>
                    <Link to="/rating">
                        <Button text="Рейтинг" active={getActivePage() === 2} />
                    </Link>
                </li>
                <li>
                    <Link to="/report">
                        <Button text="Отчеты" active={getActivePage() === 3} />
                    </Link>
                </li>
                {/* Раскомментируйте при необходимости */}
                {/* <li>
                    <Link to="/about">
                        <Button text="О нас" active={getActivePage() === 4} />
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <Button text="Профиль" active={getActivePage() === 5} />
                    </Link>
                </li> */}
            </ul>
        </nav>
    );
};

export default HeaderNav;