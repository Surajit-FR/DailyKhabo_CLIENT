import FooterBottom from "./footer/FooterBottom";
import FooterTop from "./footer/FooterTop";

const Footer = (): JSX.Element => {
    return (
        <>
            <footer>
                {/* Footer Top */}
                <FooterTop />

                {/* Footer Bottom */}
                <FooterBottom />
            </footer>
        </>
    );
};

export default Footer;