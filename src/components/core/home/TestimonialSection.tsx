const TestimonialSection = (): JSX.Element => {
    return (
        <>
            <section className="testimonial style-2 pt-70">
                <div className="container">
                    <div className="section-header w-100 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".1s">
                        <h2>Testimonials</h2>
                        <h2><span> Listen to what my clients say</span></h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="testimonial-slider">
                            <div className="swiper-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                <div className="swiper-slide">
                                    <div className="testi-item">
                                        <div className="testi-content">
                                            <img src="assets/images/testimonial/icon/03.png" alt="testimonial" />
                                            <p>Conveniently innovate user-centric benefits with installed base testing procedures. Authoritatively unleas before progressive architectures rapidiously build clicks-and-mortar testing procedures without installed manufactured products distinctively. </p>
                                            <div className="testimonial-author">
                                                <div className="author-name-des">
                                                    <h4>Sahjahan Sagor</h4>
                                                    <p>Founder & Ceo</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testi-item">
                                        <div className="testi-content">
                                            <img src="assets/images/testimonial/icon/03.png" alt="testimonial" />
                                            <p>Conveniently innovate user-centric benefits with installed base testing procedures. Authoritatively unleas before progressive architectures rapidiously build clicks-and-mortar testing procedures without installed manufactured products distinctively. </p>
                                            <div className="testimonial-author">
                                                <div className="author-name-des">
                                                    <h4>Rajib Ahmed</h4>
                                                    <p>Founder & Ceo</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testi-item">
                                        <div className="testi-content">
                                            <img src="assets/images/testimonial/icon/03.png" alt="testimonial" />
                                            <p>Conveniently innovate user-centric benefits with installed base testing procedures. Authoritatively unleas before progressive architectures rapidiously build clicks-and-mortar testing procedures without installed manufactured products distinctively. </p>
                                            <div className="testimonial-author">
                                                <div className="author-name-des">
                                                    <h4>Marjana Sorna</h4>
                                                    <p>Founder & Ceo</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-button-prev"><i className="fas fa-chevron-left"></i></div>
                            <div className="testimonial-button-next"><i className="fas fa-chevron-right"></i></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialSection;