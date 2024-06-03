import { Link } from "react-router-dom";

const MobileSection = (): JSX.Element => {
    return (
        <>
            <div className="mobile-menu">
                <nav className="mobile-header primary-menu d-lg-none">
                    <div className="header-logo">
                        <Link to="index.html" className="logo"><img src="/assets/images/logo/logo.png" alt="logo" /></Link>
                    </div>
                    <div className="header-bar" id="open-button">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                <nav className="menu">
                    <div className="mobile-menu-area d-lg-none">
                        <div className="mobile-menu-area-inner" id="scrollbar">
                            <ul className="m-menu">
                                <li><Link className="active" to="index.html">Home</Link></li>
                                <li><Link to="about.html">About Us</Link></li>
                                <li><Link to="#">Our Products</Link>
                                    <ul className="m-submenu">
                                        <li><Link to="gold-premium-ghee.html">Gold Premium Ghee</Link></li>
                                        <li><Link to="gir-cows-ghee.html">Gir Cow’s Ghee</Link></li>
                                        <li><Link to="desi-ghee.html">Desi Ghee</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="blog.html">Blog</Link></li>
                                <li><Link to="contact-us.html">Contact us</Link></li>
                            </ul>
                            <ul className="social-link-list d-flex flex-wrap">
                                <li><Link to="#" className="facebook"><i className=" fab fa-facebook-f"></i></Link></li>
                                <li><Link to="#" className="twitter-sm"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link to="#" className="linkedin"><i className="fab fa-linkedin-in"></i></Link></li>
                                <li><Link to="#" className="google"><i className="fab fa-google-plus-g"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default MobileSection;