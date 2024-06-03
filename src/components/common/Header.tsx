import HeaderBottom from "./header/HeaderBottom";
import HeaderTop from "./header/HeaderTop";

const Header = (): JSX.Element => {
    return (
        <>
            {/* <!-- header section start here --> */}
            <header className="header-section style-2 d-none d-lg-block">
                {/* Header Top */}
                <HeaderTop />

                {/* Header Bottom */}
                <HeaderBottom />
            </header>
            {/* <!-- header section ending here --> */}
        </>
    );
};

export default Header;