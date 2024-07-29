import PageTopSection from "../../components/common/PageTopSection";
import ContactUsForm from "../../components/core/contactus/ContactUsForm";
import MapSection from "../../components/core/contactus/MapSection";
import { CustomHeaders } from "../../types/common.";

type ContactUs_props = {
    header: CustomHeaders | undefined
}

const ContactUs = ({ header }: ContactUs_props): JSX.Element => {
    return (
        <>
            {/* Conatct us top section */}
            <PageTopSection pageName="Contact Us" />

            {/* Contact Us form section */}
            <ContactUsForm header={header} />

            {/* Contact Us map section */}
            <MapSection />
        </>
    );
};

export default ContactUs;