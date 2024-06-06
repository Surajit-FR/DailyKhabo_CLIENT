import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeaderBottom = (): JSX.Element => {
    const token: string | null = window.localStorage.getItem("token");
    const _TOKEN = JSON.parse(token ?? 'null');

    const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>('/home'); // Default active link
    const navigate: any = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsMenuFixed(window.scrollY > 130);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: 'Home', path: '/home', submenu: [] },
        { name: 'About Us', path: '/aboutus', submenu: [] },
        {
            name: 'Our Products', path: '#', submenu: [
                { name: 'Gold Premium Ghee', path: '/goldpremiumghee' },
                { name: 'Gir Cow’s Ghee', path: '/gircowsghee' },
                { name: 'Deshi Ghee', path: '/deshighee' },
            ]
        },
        { name: 'Blog', path: '/blog', submenu: [] },
        { name: 'Contact us', path: '/contactus', submenu: [] },
    ];

    const menuClasses = `header-bottom ${isMenuFixed ? 'menu-fixed animated fadeInDown' : 'slideInUp'}`;

    // handleLinkClick func.
    const handleLinkClick = (path: string) => {
        setActiveLink(path);
    };

    return (
        <>
            <div className={menuClasses}>
                <div className="container">
                    <div className="row">
                        <nav className="primary-menu">
                            <div className="menu-area">
                                <div className="row justify-content-between align-items-center">
                                    <Link to="/home" className="logo" onClick={() => handleLinkClick('/home')}>
                                        <img src="/assets/images/logo/logo.png" alt="logo" />
                                    </Link>
                                    <div className="main-menu-area d-flex align-items-center">
                                        <ul className="main-menu d-flex align-items-center">
                                            {menuItems.map(item => (
                                                <li key={item.name}>
                                                    <Link
                                                        to={item.path}
                                                        className={activeLink === item.path ? 'active' : ''}
                                                        onClick={() => handleLinkClick(item.path)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                    {item.submenu.length > 0 && (
                                                        <ul className="submenu">
                                                            {item.submenu.map(subitem => (
                                                                <li key={subitem.name}>
                                                                    <Link
                                                                        to={subitem.path}
                                                                        className={activeLink === subitem.path ? 'active' : ''}
                                                                        onClick={() => handleLinkClick(subitem.path)}
                                                                    >
                                                                        {subitem.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="d-none d-lg-block">
                                            <ul className="search-cart">
                                                <li className="search">
                                                    <i className="flaticon-magnifying-glass"></i>
                                                </li>
                                                <li className="cart">
                                                    <i className="flaticon-shopping-bag"></i>
                                                    <span>2</span>
                                                    <div className="cart-content">
                                                        <div className="cart-item">
                                                            <div className="cart-img">
                                                                <Link to="#"><img src="/assets/images/buycart/01.jpg" alt="" /></Link>
                                                            </div>
                                                            <div className="cart-des">
                                                                <Link to="#">Product Title Hore</Link>
                                                                <p>120.00</p>
                                                            </div>
                                                            <div className="cart-btn">
                                                                <Link to="#"><i className="flaticon-close"></i></Link>
                                                            </div>
                                                        </div>
                                                        <div className="cart-item">
                                                            <div className="cart-img">
                                                                <Link to="#"><img src="/assets/images/buycart/02.jpg" alt="" /></Link>
                                                            </div>
                                                            <div className="cart-des">
                                                                <Link to="#">Product Title Hore</Link>
                                                                <p>120.00</p>
                                                            </div>
                                                            <div className="cart-btn">
                                                                <Link to="#"><i className="flaticon-close"></i></Link>
                                                            </div>
                                                        </div>
                                                        <div className="cart-bottom">
                                                            <div className="cart-subtotal">
                                                                <p>Total: <b className="float-right">240.00</b></p>
                                                            </div>
                                                            <div className="cart-action">
                                                                <button
                                                                    type="submit"
                                                                    className="button d-btn2"
                                                                    style={{ marginRight: "1.5px" }}
                                                                    onClick={() => navigate("/cartproducts")}
                                                                >View cart</button>
                                                                <button
                                                                    type="submit"
                                                                    className="button d-btn2"
                                                                    style={{ marginLeft: "1.5px" }}
                                                                    onClick={() => navigate("/checkout")}
                                                                >Checkout</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {
                                                    !_TOKEN ?
                                                        <li className='ml-4'>
                                                            <Link className="regular1" to="#" data-toggle="modal"
                                                                data-target="#exampleAuthModal">
                                                                <i className="fa-regular fa-user fa-fade mx-2"></i>Login
                                                            </Link>
                                                        </li>
                                                        :
                                                        <li className='ml-3'>
                                                            <Link className="regular1" to="#">
                                                            <i className="fa-solid fa-power-off fa-bounce mx-2"></i>Logout
                                                            </Link>
                                                        </li>
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderBottom;