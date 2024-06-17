import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../services/slices/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DecryptData } from '../../../helpers/EncryptDecrypt';
import { getAllCartData } from '../../../services/slices/CartSlice';
import { CartItemType, CategoryResponse } from '../../../config/DataTypes.config';
import { getImagUrl } from '../../../helpers/getImage';
import { getAllCategory } from '../../../services/slices/UtilitySlice';
import { deleteItem } from '../../../helpers/CartFunctions';
import { Dispatch } from 'redux';

const HeaderBottom = (): JSX.Element => {
    const { category_data } = useSelector((state: any) => state.utilitySlice);
    const { cart_data } = useSelector((state: any) => state.cartSlice);

    const token: string | null = window.localStorage.getItem("token");
    const _TOKEN = JSON.parse(token ?? 'null');

    const header = useMemo(() => ({
        headers: {
            Authorization: `Bearer ${_TOKEN}`
        }
    }), [_TOKEN]);

    const user: any = window.localStorage.getItem("user");
    const _USER = DecryptData(user ? user : "");

    const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>('/home');
    const [cartData, setCartData] = useState<CartItemType[]>([]);
    const [categoryData, setCategoryData] = useState<CategoryResponse[]>([]);

    const dispatch: Dispatch<any> = useDispatch();
    const navigate: any = useNavigate();

    const menuItems = [
        { name: 'Home', path: '/home', submenu: [] },
        { name: 'About Us', path: '/aboutus', submenu: [] },
        { name: 'Our Products', path: '#', submenu: categoryData },
        { name: 'Blog', path: '/blog', submenu: [] },
        { name: 'Contact us', path: '/contactus', submenu: [] },
    ];

    const menuClasses = `header-bottom ${isMenuFixed ? 'menu-fixed animated fadeInDown' : 'slideInUp'}`;

    // handleLinkClick func.
    const handleLinkClick = (path: string) => {
        setActiveLink(path);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsMenuFixed(window.scrollY > 130);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (_TOKEN) {
            dispatch(getAllCartData({ header }));
        };
        dispatch(getAllCategory({
            page: 0,
            pageSize: 0,
        }));
    }, [dispatch, header, _TOKEN]);


    useEffect(() => {
        setCartData(cart_data?.data);
        setCategoryData(category_data?.data);
    }, [cart_data, category_data]);


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
                                            {menuItems?.map(item => (
                                                <li key={item.name}>
                                                    <Link
                                                        to={item.path}
                                                        className={activeLink === item.path ? 'active' : ''}
                                                        onClick={() => handleLinkClick(item.path)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                    {item?.submenu?.length > 0 && (
                                                        <ul className="submenu">
                                                            <li>
                                                                <Link
                                                                    to={`/product/All Products`}
                                                                    className={activeLink === "All Products" ? 'active' : ''}
                                                                    onClick={() => handleLinkClick("All Products")}
                                                                >All Products</Link>
                                                            </li>
                                                            {item?.submenu?.map(subitem => (
                                                                <li key={subitem?._id}>
                                                                    <Link
                                                                        to={`/product/${subitem?.category_name}`}
                                                                        className={activeLink === subitem?._id ? 'active' : ''}
                                                                        onClick={() => handleLinkClick(subitem?._id)}
                                                                    >
                                                                        {subitem?.category_name}
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
                                                <li className="search" style={{ marginTop: _TOKEN ? "12px" : "" }}>
                                                    <i className="flaticon-magnifying-glass"></i>
                                                </li>
                                                <li className="cart" style={{ marginTop: _TOKEN ? "12px" : "" }}>
                                                    <i className="flaticon-shopping-bag"></i>
                                                    <span style={{ display: _TOKEN ? "block" : "none" }}>{cartData?.length}</span>
                                                    <div className="cart-content" style={{ display: _TOKEN ? "block" : "none" }}>
                                                        {
                                                            _TOKEN && cartData && cartData?.map((item, index) => {
                                                                return (
                                                                    <div className="cart-item" key={index}>
                                                                        <div className="cart-img">
                                                                            <Link to="#">
                                                                                <img src={getImagUrl(item?.product?.productImages[0])} alt="" height={50} width={50} />
                                                                            </Link>
                                                                        </div>
                                                                        <div className="cart-des">
                                                                            <Link to={`/product/details/${item?.product?._id}`} style={{
                                                                                width: "140px",
                                                                                whiteSpace: "nowrap",
                                                                                overflow: "hidden",
                                                                                textOverflow: "ellipsis"
                                                                            }}>{item?.product?.productTitle}</Link>
                                                                            <p>₹{item?.product?.totalPrice}</p>
                                                                        </div>
                                                                        <div className="cart-btn">
                                                                            <Link
                                                                                to="#"
                                                                                onClick={() => deleteItem({ product_id: item?.product?._id, dispatch, header })}
                                                                            ><i className="flaticon-close"></i></Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }

                                                        <div className="cart-bottom">
                                                            <div className="cart-subtotal">
                                                                <p>Total: <b className="float-right">₹{cart_data?.totalAmount}</b></p>
                                                            </div>
                                                            <div className="cart-action">
                                                                <button
                                                                    type="submit"
                                                                    className="button d-btn2"
                                                                    style={{ marginRight: "1.5px" }}
                                                                    data-toggle={_TOKEN ? "" : "modal"} data-target={_TOKEN ? "" : "#exampleAuthModal"}
                                                                    onClick={() => navigate("/cartproducts")}
                                                                >View cart</button>
                                                                <button
                                                                    type="submit"
                                                                    className="button d-btn2"
                                                                    style={{ marginLeft: "1.5px" }}
                                                                    data-toggle={_TOKEN ? "" : "modal"} data-target={_TOKEN ? "" : "#exampleAuthModal"}
                                                                    onClick={() => navigate("/checkout")}
                                                                >Checkout</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {!_TOKEN ?
                                                    <li className='ml-4'>
                                                        <Link className="regular1" to="#" data-toggle="modal"
                                                            data-target="#exampleAuthModal">
                                                            <i className="fa-regular fa-user fa-fade mx-2"></i>Login
                                                        </Link>
                                                    </li>
                                                    :
                                                    <ul className="main-menu d-flex align-items-center">
                                                        <li>
                                                            <Link className="regular1" to="#">
                                                                <i className="fa-regular fa-user fa-fade mx-2"></i>{_USER?.full_name}
                                                            </Link>
                                                            <ul className="submenu">
                                                                <li><Link to="#">Profile</Link></li>
                                                                <li>
                                                                    <Link className="regular1" to="#" onClick={() => dispatch(logoutUser())}>
                                                                        <i className="fa-solid fa-power-off fa-bounce"></i> Logout
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div >
            </div >
        </>
    );
};

export default HeaderBottom;