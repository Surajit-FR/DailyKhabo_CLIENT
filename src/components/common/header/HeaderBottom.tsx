import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../services/slices/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DecryptData } from '../../../helpers/EncryptDecrypt';
import { getAllCartData, syncCart } from '../../../services/slices/CartSlice';
import { getImagUrl } from '../../../helpers/getImage';
import { getAllCategory } from '../../../services/slices/UtilitySlice';
import { calculateTotalAmountWithShipping, deleteItem } from '../../../helpers/CartFunctions';
import { Dispatch } from 'redux';
import { jwtDecode } from 'jwt-decode';
import { showToast } from '../../../helpers/Toast';
import { CartItem } from '../../../types/cart';
import { CategoryResponse } from '../../../types/category';

const HeaderBottom = (): JSX.Element => {
    const { category_data } = useSelector((state: any) => state.utilitySlice);
    const { cart_data } = useSelector((state: any) => state.cartSlice);

    const token: string | null = window.localStorage.getItem("token");
    const _TOKEN = JSON.parse(token ?? 'null');
    const localStorageCartData = useMemo(() => JSON.parse(localStorage.getItem('CartDataInfo') || '[]'), []);

    const header = useMemo(() => ({
        headers: {
            Authorization: `Bearer ${_TOKEN}`
        }
    }), [_TOKEN]);

    const user: any = window.localStorage.getItem("user");
    const _USER = DecryptData(user ? user : "");

    const [isMenuFixed, setIsMenuFixed] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>('/home');
    const [cartData, setCartData] = useState<CartItem[]>([]);
    const [guestCartData, setGuestCartData] = useState<CartItem[]>([]);
    const [categoryData, setCategoryData] = useState<CategoryResponse[]>([]);

    const totalPaybleAmount = calculateTotalAmountWithShipping(guestCartData);

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

    // handleSyncCart func.
    const handleSyncCart = useCallback(() => {
        if (_TOKEN) {
            const cartDataToSync = localStorageCartData?.map((item: { product: { _id: string | undefined; }; cart_quantity: number; }) => ({
                product: item?.product._id,
                cart_quantity: item?.cart_quantity,
            }));

            dispatch(syncCart({ data: cartDataToSync, header }));
        }
    }, [_TOKEN, localStorageCartData, dispatch, header]);


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

    useEffect(() => {
        setGuestCartData(localStorageCartData);
        handleSyncCart();
    }, [localStorageCartData, handleSyncCart]);


    useEffect(() => {
        if (_TOKEN) {
            const decodedJwt = jwtDecode(_TOKEN);
            const isExpired = decodedJwt?.exp ? decodedJwt.exp < Date.now() / 1000 : false;
            if (isExpired) {
                dispatch(logoutUser());
                showToast({ message: "Session Expired. You've been logged out. Please signin again.", type: 'error', durationTime: 4000, position: "top-center" });
                navigate('/home');
            }
        };
    }, [dispatch, navigate, _TOKEN]);

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
                                                                    to={`/product/All%20Products`}
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

                                                {
                                                    _TOKEN ?
                                                        <li className="cart" style={{ marginTop: _TOKEN ? "12px" : "" }}>
                                                            <i className="flaticon-shopping-bag"></i>
                                                            <span style={{ display: _TOKEN && cartData?.length > 0 ? "block" : "none" }}>{cartData?.length}</span>
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
                                                                        {
                                                                            cart_data?.data?.length > 0 && <p>Total: <b className="float-right">₹{cart_data?.totalAmountWithShipping}</b></p>
                                                                        }
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
                                                        :
                                                        <li className="cart">
                                                            <i className="flaticon-shopping-bag"></i>
                                                            <span style={{ display: guestCartData?.length > 0 ? "block" : "none" }}>{guestCartData?.length}</span>
                                                            <div className="cart-content" style={{ display: "block" }}>
                                                                {
                                                                    guestCartData && guestCartData?.map((item, index) => {
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
                                                                                        onClick={() => deleteItem({ product_id: item?.product?._id, dispatch })}
                                                                                    ><i className="flaticon-close"></i></Link>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }

                                                                <div className="cart-bottom">
                                                                    <div className="cart-subtotal">
                                                                        {
                                                                            guestCartData?.length > 0 && <p>Total: <b className="float-right">₹{totalPaybleAmount?.totalAmountWithShipping}</b></p>
                                                                        }
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
                                                                            data-toggle={_TOKEN ? "" : "modal"} data-target={_TOKEN ? "" : "#exampleAuthModal"}
                                                                        >Checkout</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                }
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
                                                                <li><Link to="/profile">Profile</Link></li>
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