import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/shared/ui/button/Button';
import { FC } from 'react';

const navItems = [
    { path: '/', text: 'Создать' },
    { path: '/rating', text: 'Рейтинг' },
    { path: '/report', text: 'Отчеты' },
] as const;

export const HeaderNav: FC = () => {
    const { pathname } = useLocation();

    return (
        <nav>
            <ul className="flex gap-2">
                {navItems.map(({ path, text }) => (
                    <li key={path}>
                        <Link to={path}>
                            <Button
                                text={text}
                                active={pathname === path}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};