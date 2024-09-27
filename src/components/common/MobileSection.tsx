import { Link, useNavigate } from "react-router-dom";
import { DecryptData } from "../../helpers/EncryptDecrypt";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../services/slices/AuthSlice";
import { useEffect, useMemo, useState } from "react";
import { getAllCategory } from "../../services/slices/UtilitySlice";
import { CategoryResponse } from "../../types/category";

const MobileSection = (): JSX.Element => {
    const { category_data } = useSelector((state: any) => state.utilitySlice);
    const { cart_data } = useSelector((state: any) => state.cartSlice);

    const token: string | null = window.localStorage.getItem("token");
    const _TOKEN = JSON.parse(token ?? 'null');
    const navigate: any = useNavigate();

    const header = useMemo(() => ({
        headers: {
            Authorization: `Bearer ${_TOKEN}`
        }
    }), [_TOKEN]);

    const user: any = window.localStorage.getItem("user");
    const _USER = DecryptData(user ? user : "");

    const dispatch: Dispatch<any> = useDispatch();
    const [activeLink, setActiveLink] = useState<string>('/home');
    const [categoryData, setCategoryData] = useState<CategoryResponse[]>([]);

    const menuItems = [
        { name: 'Home', path: '/home', submenu: [] },
        { name: 'About Us', path: '/aboutus', submenu: [] },
        { name: 'Our Products', path: '#', submenu: categoryData },
        { name: 'Blog', path: '/blog', submenu: [] },
        { name: 'Contact us', path: '/contactus', submenu: [] },
    ];

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

    // handleLinkClick func.
    const handleLinkClick = (path: string) => {
        setActiveLink(path);
    };

    // handleMenuClick func.
    const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        handleMenuItemClick(e);
    };

    useEffect(() => {
        dispatch(getAllCategory({
            page: 0,
            pageSize: 0,
        }));
    }, [dispatch, header, _TOKEN]);


    useEffect(() => {
        setCategoryData(category_data?.data);
    }, [category_data]);

    return (
        <>
            <div className="mobile-menu">
                <nav className="mobile-header primary-menu d-lg-none">
                    <div className="header-logo">
                        <Link to="#" className="logo"><img src="/assets/images/logo/logo.png" alt="logo" /></Link>
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
                                {menuItems?.map(item => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.path}
                                            className={activeLink === item.path ? 'active' : ''}
                                            onClick={(e) => {
                                                handleLinkClick(item.path);
                                                handleMenuClick(e);
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                        {item?.submenu?.length > 0 && (
                                            <ul className="submenu">
                                                <li>
                                                    <Link
                                                        to={`/product/All%20Products`}
                                                        className={activeLink === "All Products" ? 'active' : ''}
                                                        onClick={(e) => {
                                                            handleLinkClick("All Products");
                                                            handleMenuClick(e);
                                                        }}
                                                    >All Products</Link>
                                                </li>
                                                {item?.submenu?.map(subitem => (
                                                    <li key={subitem?._id}>
                                                        <Link
                                                            to={`/product/${subitem?.category_name}`}
                                                            className={activeLink === subitem?._id ? 'active' : ''}
                                                            onClick={(e) => {
                                                                handleLinkClick(subitem?._id);
                                                                handleMenuClick(e);
                                                            }}
                                                        >
                                                            {subitem?.category_name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
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
                                            <Link to="#" className="dd-icon-down" onClick={handleMenuClick}>
                                                <i className="fa-regular fa-user fa-fade mr-2"></i>{_USER?.full_name}
                                            </Link>
                                            <ul className="m-submenu">
                                                <li><Link to="/profile">Profile</Link></li>
                                                <li>
                                                    <Link className="regular1" to="#" onClick={() => dispatch(logoutUser())}>
                                                        <i className="fa-solid fa-power-off fa-bounce"></i> Logout
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                }

                                <li className="cart" style={{ marginTop: _TOKEN ? "12px" : "", textAlign: "start" }} onClick={() => navigate("/cartproducts")}>
                                    <i className="flaticon-shopping-bag"></i>
                                    <span className="text-success ml-1" style={{ display: _TOKEN && cart_data?.data?.length > 0 ? "" : "none" }}>{cart_data?.data?.length}</span>
                                </li>
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