import { Routes, Route } from 'react-router-dom';
import Home from '../pages/others/Home';
import AboutUs from '../pages/others/AboutUs';
import Blog from '../pages/others/Blog';
import ContactUs from '../pages/others/ContactUs';
import BlogSingle from '../pages/others/BlogSingle';
import CartProducts from '../pages/others/CartProducts';
import ProductDetails from '../pages/others/ProductDetails';
import { useMemo } from 'react';
import Checkout from '../pages/others/Checkout';
import ProductsMainComponent from '../components/core/products/ProductsMainComponent';
import ProtectedOne from './private/ProtectedOne';

const AllRoutes = (): JSX.Element => {
    const token: string | null = window.localStorage.getItem("token");
    const _TOKEN = JSON.parse(token ?? 'null');
    const header = useMemo(() => ({
        headers: {
            Authorization: `Bearer ${_TOKEN}`
        }
    }), [_TOKEN]);

    return (
        <>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/product/:category_name' element={<ProductsMainComponent header={header} />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contactus' element={<ContactUs />} />
                <Route path='/blogsingle/:blog_id' element={<BlogSingle />} />
                <Route element={<ProtectedOne />}>
                    <Route path='/cartproducts' element={<CartProducts _TOKEN={_TOKEN} header={header} />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Route>
                <Route path='/product/details/:product_id' element={<ProductDetails _TOKEN={_TOKEN} header={header} />} />
            </Routes>
        </>
    );
};

export default AllRoutes;