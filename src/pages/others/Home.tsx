import AboutSection from "../../components/core/home/AboutSection";
import BannerSection from "../../components/core/home/BannerSection";
import BlogSection from "../../components/core/home/BlogSection";
import OfferSection from "../../components/core/home/OfferSection";
import ProductSection from "../../components/core/home/ProductSection";
import TestimonialSection from "../../components/core/home/TestimonialSection";

const Home = (): JSX.Element => {
    return (
        <>
            {/* banner section start here */}
            <BannerSection />

            {/* about section start here */}
            <AboutSection />

            {/* product section start here */}
            <ProductSection />

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