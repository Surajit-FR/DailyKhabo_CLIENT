import { Routes, Route } from 'react-router-dom';
import Home from '../pages/others/Home';
import AboutUs from '../pages/others/AboutUs';
import Blog from '../pages/others/Blog';
import ContactUs from '../pages/others/ContactUs';
import BlogSingle from '../pages/others/BlogSingle';
import GoldPremiumGhee from '../components/core/products/GoldPremiumGhee';
import GirCowsGhee from '../components/core/products/GirCowsGhee';
import DeshiGhee from '../components/core/products/DeshiGhee';
import CartProducts from '../pages/others/CartProducts';
import ProductDetails from '../pages/others/ProductDetails';

const AllRoutes = (): JSX.Element => {
    return (
        <>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/goldpremiumghee' element={<GoldPremiumGhee />} />
                <Route path='/gircowsghee' element={<GirCowsGhee />} />
                <Route path='/deshighee' element={<DeshiGhee />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contactus' element={<ContactUs />} />
                <Route path='/blogsingle/:blog_id' element={<BlogSingle />} />
                <Route path='/cartproducts' element={<CartProducts />} />
                <Route path='/product/details/:product_id' element={<ProductDetails />} />
            </Routes>
        </>
    );
};

export default AllRoutes;