import { Link } from "react-router-dom";

const BannerSection = (): JSX.Element => {
    return (
        <>
            <section className="slider-section banner style-1 style-3">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="/assets/images/banner/06.jpg" alt="Slider One" />
                            <div className="container">
                                <div className="slider-content right">
                                    <div className="slider-content-inner">
                                        <img src="/assets/images/banner/content/01.png" alt="banner" />
                                        <h2 className="delay1">100% Natural & Healthy Ghee</h2>
                                        <p className="delay3">Dynamically supply web-enabled portals for high standards income business Completely productivate optimal sources rather than strategic.</p>
                                        <Link to="#" className="btn delay4">View Product</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="shape3">
                                <img src="/assets/images/banner/shape/04.png" alt="shape" />
                            </div>
                            <div className="shape4">
                                <img src="/assets/images/banner/shape/05.png" alt="shape1" />
                            </div>
                            <div className="shape5">
                                <img src="/assets/images/banner/shape/06.png" alt="shape2" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/assets/images/banner/06.jpg" alt="Slider One" />
                            <div className="container">
                                <div className="slider-content left">
                                    <div className="slider-content-inner">
                                        <img src="/assets/images/banner/content/01.png" alt="banner" />
                                        <h2 className="delay1">Fresh & Healthy Ghee For Your Family</h2>
                                        <p className="delay3 d-block">Dynamically supply web-enabled portals for high standards income and business Completely productivate optimal sources rather than strategic.</p>
                                        <Link to="#" className="btn delay4">View Product</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="shape">
                                <img src="/assets/images/banner/shape/01.png" alt="shape" />
                            </div>
                            <div className="shape1">
                                <img src="/assets/images/banner/shape/02.png" alt="shape1" />
                            </div>
                            <div className="shape2">
                                <img src="/assets/images/banner/shape/03.png" alt="shape2" />
                            </div>
                        </div>
                        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerSection;