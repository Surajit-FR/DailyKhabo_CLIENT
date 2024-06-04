import { Link } from "react-router-dom";

const AboutTop = (): JSX.Element => {
    return (
        <>
            <section className="about style-2 padding-tb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-left">
                                <div className="section-header wow fadeInDown" data-wow-duration="1s" data-wow-delay=".1s">
                                    <h2><span>About Us</span></h2>
                                    <p>Continually productize compelling quality for packed with Elated
                                        productize compelling quality for packed with all Elated Them
                                        Setting up to website and creating pages.</p>
                                </div>
                                <div className="section-wrapper">
                                    <ul className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".2s">
                                        <li><i className="far fa-check-square"></i>We are providing different services</li>
                                        <li><i className="far fa-check-square"></i>We are one of leading company</li>
                                        <li><i className="far fa-check-square"></i>Profitability is the primary goal of all business
                                        </li>
                                        <li><i className="far fa-check-square"></i>Learn how to grow your Business</li>
                                        <li><i className="far fa-check-square"></i>Professional solutions for your business</li>
                                    </ul>
                                    <Link to="#" className="btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-right wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                <div className="video-post text-center">
                                    <div className="video-thumb">
                                        <img src="/assets/images/about/01.jpg" alt="about-us" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutTop;