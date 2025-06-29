
import { Link, useResolvedPath } from "react-router-dom";
import LogoRS from '../../assets/img/logo.png';

export default function Navbar() {

    const { pathname } = useResolvedPath();


    const navItems = [
        {
            label: 'Inicial',
            url: '/',
        },
        {
            label: 'Como Utilizar',
            url: '/how-to-use',
        },
        {
            label: 'Escores',
            url: '/scores',
        },
        {
            label: 'Sobre Nós',
            url: '/about-us',
        },
    ];

    return (
        <div className="fixed top-0 left-0 h-24 w-full bg-white">
            <div className="w-full h-full flex justify-between px-4 md:px-16">
                <div className="w-full h-auto max-w-56">
                    <Link to="/">
                        <div
                            className="w-full h-full bg-center bg-no-repeat bg-contain"
                            style={{
                                backgroundImage: `url(${LogoRS})`,
                            }}
                        />
                    </Link>
                </div>
                <div className="flex text-base font-medium">
                    {navItems.map(navItem => (
                        <Link className="h-full" key={navItem.url} to={navItem.url}>
                            <div
                                className={`
                                    relative h-full flex items-center px-4
                                    hover:bg-gray-100 hover:text-colorPrimary ${pathname === navItem.url ? 'font-semibold text-colorPrimary' : ''}`
                                }
                                style={{ transition: 'background-color .3s ease' }}
                            >
                                {navItem.label}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 bg-colorPrimary ${pathname === navItem.url ? 'h-[2px]' : 'h-0'}`}
                                    style={{ transition: 'height .3s ease' }}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}