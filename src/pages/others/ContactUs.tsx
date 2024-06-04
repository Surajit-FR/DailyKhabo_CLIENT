import PageTopSection from "../../components/common/PageTopSection";
import ContactUsForm from "../../components/core/contactus/ContactUsForm";
import MapSection from "../../components/core/contactus/MapSection";

const ContactUs = (): JSX.Element => {
    return (
        <>
            {/* Conatct us top section */}
            <PageTopSection pageName="Contact Us" />

            {/* Contact Us form section */}
            <ContactUsForm />

            {/* Contact Us map section */}
            <MapSection />
        </>
    );
};

export default ContactUs;