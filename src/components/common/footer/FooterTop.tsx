import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Category } from "../../../types/category";

const FooterTop = (): JSX.Element => {
    const { category_data } = useSelector((state: any) => state.utilitySlice);

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
                                    <li style={{ cursor: "pointer" }} onClick={() => window.open('/return-policy', '_blank')}>Return Policy</li>
                                    <li style={{ cursor: "pointer" }} onClick={() => window.open('/shipping-policy', '_blank')}>Shipping Policy</li>
                                    <li style={{ cursor: "pointer" }} onClick={() => window.open('/privacy-policy', '_blank')}>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <div className="post-item">
                                <div className="post-title">
                                    <h3>Product</h3>
                                </div>
                                <ul className="footer-location">
                                    {
                                        category_data?.data?.map((category: Category, index: number) => {
                                            return (
                                                <li key={index}>{category?.category_name}</li>
                                            )
                                        })
                                    }
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
                                            <p>+917980645565</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-part">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="content-part">
                                            <p>info@dailykhaoghee.com</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-part">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="content-part">
                                            <p>deba1997sadhukhan@gmail.com</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-part">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="content-part">
                                            <p>192, Ram lal Mukherjee Road, Singhi bagan Monirampur, <br />Barrackpore, North 24 parganas WEST BENGAL - 700120</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <img src="/assets/images/logo/fssai.jpg" alt="logo" style={{ height: "100px", width: "auto", marginRight: "20px" }} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterTop;