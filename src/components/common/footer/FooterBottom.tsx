import { Link } from "react-router-dom";

const FooterBottom = (): JSX.Element => {
    return (
        <>
            <div className="footer-bottom wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                <div className="container">
                    <div className="section-wrapper">
                        <p className="text-center">&copy; 2024 <Link to="/home">Daily Khao</Link>.All Rights Reserved By <Link to="#">Ariprodesigns</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterBottom;