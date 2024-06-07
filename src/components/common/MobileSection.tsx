import { Link } from "react-router-dom";
import { DecryptData } from "../../helpers/EncryptDecrypt";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../services/slices/AuthSlice";

const MobileSection = (): JSX.Element => {
    const token: string | null = window.localStorage.getItem("token");
    const _TOKEN = JSON.parse(token ?? 'null');

    const user: any = window.localStorage.getItem("user");
    const _USER = DecryptData(user ? user : "");

    const dispatch: Dispatch<any> = useDispatch();

    const handleMenuItemClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const element = e.currentTarget.parentElement!;
        if (element.classList.contains('open')) {
            element.classList.remove('open');
            Array.from(element.querySelectorAll('li')).forEach((li) => li.classList.remove('open'));
            Array.from(element.querySelectorAll('ul')).forEach((ul) => (ul.style.display = "none"));
        } else {
            element.classList.add('open');
            const siblings = Array.from(element.parentElement!.children).filter((child) => child !== element);
            siblings.forEach((sibling) => {
                sibling.classList.remove('open');
                Array.from(sibling.querySelectorAll('li')).forEach((li) => li.classList.remove('open'));
                Array.from(sibling.querySelectorAll('ul')).forEach((ul) => (ul.style.display = "none"));
            });
            Array.from(element.children).forEach((child) => {
                if (child.nodeName === "UL") {
                    (child as HTMLUListElement).style.display = "block";
                }
            });
        }
    };

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
                                <li><Link className="active" to="/home">Home</Link></li>
                                <li><Link to="/aboutus">About Us</Link></li>
                                <li><Link to="#" className="dd-icon-down" onClick={handleMenuItemClick}>Our Products</Link>
                                    <ul className="m-submenu">
                                        <li><Link to="/goldpremiumghee">Gold Premium Ghee</Link></li>
                                        <li><Link to="/gircowsghee">Gir Cow’s Ghee</Link></li>
                                        <li><Link to="/deshighee">Desi Ghee</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contactus">Contact us</Link></li>
                                {
                                    !_TOKEN ?
                                        <li>
                                            <Link className="regular1" to="#" data-toggle="modal"
                                                data-target="#exampleAuthModal">
                                                <i className="fa-regular fa-user fa-fade"></i> Login
                                            </Link>
                                        </li>
                                        :
                                        <li>
                                            <Link to="#" className="dd-icon-down" onClick={handleMenuItemClick}>
                                                <i className="fa-regular fa-user fa-fade mr-2"></i>{_USER?.full_name}
                                            </Link>
                                            <ul className="m-submenu">
                                                <li><Link to="#">Profile</Link></li>
                                                <li>
                                                    <Link className="regular1" to="#" onClick={() => dispatch(logoutUser())}>
                                                        <i className="fa-solid fa-power-off fa-bounce"></i> Logout
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                }
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