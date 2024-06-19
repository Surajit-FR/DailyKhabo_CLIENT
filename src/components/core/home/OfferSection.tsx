import { Link } from "react-router-dom";

const OfferSection = (): JSX.Element => {
    return (
        <>
            <section className="offer-section style-2">
                <div className="shape">
                    <img src="/assets/images/offer/shape/02.png" alt="shape1" />
                </div>
                <div className="shape1 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                    <img src="/assets/images/banner/shape/05.png" alt="shape1" />
                </div>
                <div className="shape2 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                    <img src="/assets/images/banner/shape/06.png" alt="shape2" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".1s">
                            <div className="post-thumb">
                                <img src="/assets/images/about/home-4/01.png" alt="offer" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="offer-content">
                                <h2>Best Deals Of This Week</h2>
                                <div className="offer-thumb">
                                    <img src="/assets/images/offer/shape/01.png" alt="offer" />
                                    <span className="offer-option">
                                        <img src="/assets/images/offer/03.png" alt="offer" />
                                    </span>
                                </div>
                                <Link to="#" className="btn">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OfferSection;