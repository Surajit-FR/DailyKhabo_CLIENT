import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeaderBottom = (): JSX.Element => {
    const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false);
    const navigate: any = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsMenuFixed(window.scrollY > 130);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuClasses = `header-bottom ${isMenuFixed ? 'menu-fixed animated fadeInDown' : 'slideInUp'}`;

    return (
        <>
            <div className={menuClasses}>
                <div className="container">
                    <div className="row">
                        <nav className="primary-menu">
                            <div className="menu-area">
                                <div className="row justify-content-between align-items-center">
                                    <Link to="/home" className="logo">
                                        <img src="/assets/images/logo/logo.png" alt="logo" />
                                    </Link>
                                    <div className="main-menu-area d-flex align-items-center">
                                        <ul className="main-menu d-flex align-items-center">
                                            <li><Link to="/home" className="active">Home</Link></li>
                                            <li><Link to="/aboutus">About Us</Link></li>
                                            <li><Link to="#">Our Products</Link>
                                                <ul className="submenu">
                                                    <li><Link to="/goldpremiumghee">Gold Premium Ghee</Link></li>
                                                    <li><Link to="/gircowsghee">Gir Cow’s Ghee</Link></li>
                                                    <li><Link to="/deshighee">Deshi Ghee</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/contactus">Contact us</Link></li>
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
                                                                >Checkout</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
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