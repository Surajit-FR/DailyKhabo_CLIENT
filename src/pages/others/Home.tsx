import { Dispatch } from "redux";
import AboutSection from "../../components/core/home/AboutSection";
import BannerSection from "../../components/core/home/BannerSection";
import BlogSection from "../../components/core/home/BlogSection";
import OfferSection from "../../components/core/home/OfferSection";
import ProductSection from "../../components/core/home/ProductSection";
import TestimonialSection from "../../components/core/home/TestimonialSection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../services/slices/UtilitySlice";
import { ProductResponse } from "../../config/DataTypes.config";


const Home = (): JSX.Element => {
    const { products_data } = useSelector((state: any) => state.utilitySlice);
    const dispatch: Dispatch<any> = useDispatch();

    const [productData, setProductData] = useState<ProductResponse[]>([]);

    useEffect(() => {
        dispatch(getAllProduct({
            page: 0,
            pageSize: 0,
            search: "",
            category: ""
        }));
    }, [dispatch]);

    useEffect(() => {
        setProductData(products_data?.data);
    }, [products_data]);

    return (
        <>
            {/* banner section start here */}
            <BannerSection />

            {/* about section start here */}
            <AboutSection />

            {/* product section start here */}
            <ProductSection productData={productData} />

            {/* offer section start here */}
            <OfferSection />

            {/* testimonial section start here */}
            <TestimonialSection />

            {/* blog section start here */}
            <BlogSection />
        </>
    );
};

export default Home;