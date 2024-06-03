import { Link } from "react-router-dom";

const FooterTop = (): JSX.Element => {
    return (
        <>
            <div className="footer-top padding-tb">
                <div className="container">
                    <div className="section-wrapper row">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <div className="post-item">
                                <Link to="#" className="footer-logo">
                                    <img src="/assets/images/logo/foterlogo.png" alt="footer-logo" />
                                </Link>
                                <p>Continually productize compelling quality dome packed with all Elated
                                    Themes ently utilize website and creating pages corporate </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <div className="post-item">
                                <div className="post-title">
                                    <h3>Quick Link</h3>
                                </div>
                                <ul className="footer-location">
                                    <li>Return Policy</li>
                                    <li>Shipping Policy</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <div className="post-item">
                                <div className="post-title">
                                    <h3>Product</h3>
                                </div>
                                <ul className="footer-location">
                                    <li>Desi Ghee</li>
                                    <li>Premium Ghee</li>
                                    <li>Cow’s Ghee</li>
                                    <li>Brown Ghee</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <div className="post-item">
                                <div className="post-title">
                                    <h3>Keep In Touch</h3>
                                </div>
                                <ul className="footer-location">
                                    <li>
                                        <div className="icon-part">
                                            <i className="fas fa-phone-volume"></i>
                                        </div>
                                        <div className="content-part">
                                            <p>+88130-589-745-6987</p>
                                            <p>+1655-456-523</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-part">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="content-part">
                                            <p>Email@email.com</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-part">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="content-part">
                                            <p>25/2 Lane2 Vokte Street Building <br />Melborn City</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterTop;