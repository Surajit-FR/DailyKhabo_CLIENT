import { Link } from 'react-router-dom';

const HeaderBottom = (): JSX.Element => {
    return (
        <>
            <div className="header-bottom">
                <div className="container">
                    <div className="row">
                        <nav className="primary-menu">
                            <div className="menu-area">
                                <div className="row justify-content-between align-items-center">
                                    <Link to="index.html" className="logo">
                                        <img src="/assets/images/logo/logo.png" alt="logo" />
                                    </Link>
                                    <div className="main-menu-area d-flex align-items-center">
                                        <ul className="main-menu d-flex align-items-center">
                                            <li><a className="active" href="index.html">Home</a></li>
                                            <li><Link to="about.html">About Us</Link></li>
                                            <li><Link to="#">Our Products</Link>
                                                <ul className="submenu">
                                                    <li><Link to="gold-premium-ghee.html">Gold Premium Ghee</Link></li>
                                                    <li><Link to="gir-cows-ghee.html">Gir Cow’s Ghee</Link></li>
                                                    <li><Link to="desi-ghee.html">Desi Ghee</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="blog.html">Blog</Link></li>
                                            <li><Link to="contact-us.html">Contact us</Link></li>
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
                                                                <button type="submit" className="button d-btn2">View cart</button>
                                                                <button type="submit" className="button d-btn2">Checkout</button>
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