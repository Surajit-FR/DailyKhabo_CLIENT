import { Link } from "react-router-dom";

const AboutSection = (): JSX.Element => {
    return (
        <>
            <section className="about section-padding">
                <div className="container p-xl-0">
                    <div className="section-wrapper row justify-content-center">
                        <div className="col-xl-4 col-sm-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                            <div className="post-item-inner text-center">
                                <div className="post-thumb">
                                    <img src="assets/images/about/01.jpg" alt="about" />
                                </div>
                                <div className="post-content">
                                    <div className="title">
                                        <h4>Gold Premium Ghee</h4>
                                    </div>
                                    <Link to="#" className="btn btn-m-t">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <div className="post-item-inner text-center">
                                <div className="post-thumb">
                                    <img src="assets/images/about/02.jpg" alt="about" />
                                </div>
                                <div className="post-content">
                                    <div className="title">
                                        <h4>Gold Premium Ghee</h4>
                                    </div>
                                    <Link to="#" className="btn btn-m-t">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="post-item-inner text-center">
                                <div className="post-thumb">
                                    <img src="assets/images/about/03.jpg" alt="about" />
                                </div>
                                <div className="post-content">
                                    <div className="title">
                                        <h4>Gold Premium Ghee</h4>
                                    </div>
                                    <Link to="#" className="btn btn-m-t">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSection;