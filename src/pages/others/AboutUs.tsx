import PageTopSection from "../../components/common/PageTopSection";
import AboutBottom from "../../components/core/aboutus/AboutBottom";
import AboutMiddle from "../../components/core/aboutus/AboutMiddle";
import AboutTop from "../../components/core/aboutus/AboutTop";
import TestimonialSection from "../../components/core/home/TestimonialSection";

const AboutUs = (): JSX.Element => {
    return (
        <>
            {/* AboutHeader section */}
            <PageTopSection pageName="About Us" />

            {/* AboutTop section */}
            <AboutTop />

            {/* AboutMiddle section */}
            <AboutMiddle />

            {/* AboutBottom section */}
            <AboutBottom />

            {/* testimonial section start here */}
            <TestimonialSection />
        </>
    );
};

export default AboutUs;