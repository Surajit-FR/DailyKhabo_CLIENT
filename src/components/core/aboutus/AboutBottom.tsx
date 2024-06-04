import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import CountUp from 'react-countup';

// Use SwiperCore
SwiperCore.use([Navigation, Autoplay]);

const AboutBottom = (): JSX.Element => {
    return (
        <>
            <section className="histori padding-tb">
                <div className="container">
                    <div className="section-header wow fadeInDown" data-wow-duration="1s" data-wow-delay=".1s">
                        <h2><span>History</span></h2>
                        <h2>40 Years Farm Traditions</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row no-gutters">
                            <div className="col-lg-7 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">

                                <div className="histori-slider">
                                    <Swiper
                                        modules={[Navigation, Autoplay]}
                                        slidesPerView={1}
                                        spaceBetween={20}
                                        loop={true}
                                        autoplay={{
                                            delay: 3200,
                                            disableOnInteraction: false,
                                        }}
                                        navigation={{
                                            nextEl: '.histori-button-next',
                                            prevEl: '.histori-button-prev',
                                        }}
                                        breakpoints={{
                                            576: {
                                                spaceBetween: 0,
                                            }
                                        }}
                                    >
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="histori-item">
                                                    <div className="histori-thumb">
                                                        <img src="/assets/images//histori/01.jpg" alt="histori" />
                                                    </div>
                                                    <div className="histori-content">
                                                        <div className="histori-left">
                                                            <h2>Since</h2>
                                                            <h3>1975</h3>
                                                        </div>
                                                        <div className="histori-right">
                                                            <p>Continually productize compelling quality elated them setting up to
                                                                website with
                                                                all them imperdiet molestieo continually productize compelling
                                                                quality for packedq
                                                                for packed with all elated themes setting up to website and creating
                                                                pages
                                                                compelling quality for packed with all elated themes setting up to
                                                                website .</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="histori-item">
                                                    <div className="histori-thumb">
                                                        <img src="/assets/images//histori/01.jpg" alt="histori" />
                                                    </div>
                                                    <div className="histori-content">
                                                        <div className="histori-left">
                                                            <h2>Since</h2>
                                                            <h3>1985</h3>
                                                        </div>
                                                        <div className="histori-right">
                                                            <p>Continually productize compelling quality elated them setting up to
                                                                website with
                                                                all them imperdiet molestieo continually productize compelling
                                                                quality for packedq
                                                                for packed with all elated themes setting up to website and creating
                                                                pages
                                                                compelling quality for packed with all elated themes setting up to
                                                                website .</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="histori-item">
                                                    <div className="histori-thumb">
                                                        <img src="/assets/images//histori/01.jpg" alt="histori" />
                                                    </div>
                                                    <div className="histori-content">
                                                        <div className="histori-left">
                                                            <h2>Since</h2>
                                                            <h3>1995</h3>
                                                        </div>
                                                        <div className="histori-right">
                                                            <p>Continually productize compelling quality elated them setting up to
                                                                website with
                                                                all them imperdiet molestieo continually productize compelling
                                                                quality for packedq
                                                                for packed with all elated themes setting up to website and creating
                                                                pages
                                                                compelling quality for packed with all elated themes setting up to
                                                                website .</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-lg-5 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".1s">
                                <div className="achievement">
                                    <div className="title">
                                        <h2>Our Achievement</h2>
                                    </div>
                                    <div className="achieve-wrapper">
                                        <div className="post-item">
                                            <div className="post-inner">
                                                <div className="post-thumb">
                                                    <img src="/assets/images/histori/achievement/01.png" alt="achievement" />
                                                </div>
                                                <div className="post-content">
                                                    <CountUp
                                                        end={6200}
                                                        duration={4}
                                                        className="counter"
                                                    />
                                                    <p>Customers</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-item">
                                            <div className="post-inner">
                                                <div className="post-thumb">
                                                    <img src="/assets/images/histori/achievement/02.png" alt="achievement" />
                                                </div>
                                                <div className="post-content">
                                                    <CountUp
                                                        end={400}
                                                        duration={4}
                                                        className="counter"
                                                    />
                                                    <p>Award Won</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-item">
                                            <div className="post-inner">
                                                <div className="post-thumb">
                                                    <img src="/assets/images/histori/achievement/03.png" alt="achievement" />
                                                </div>
                                                <div className="post-content">
                                                    <CountUp
                                                        end={500}
                                                        duration={4}
                                                        className="counter"
                                                    />
                                                    <p>volunteer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-item">
                                            <div className="post-inner">
                                                <div className="post-thumb">
                                                    <img src="/assets/images/histori/achievement/04.png" alt="achievement" />
                                                </div>
                                                <div className="post-content">
                                                    <CountUp
                                                        end={400}
                                                        duration={4}
                                                        className="counter"
                                                    />
                                                    <p>Cow</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="histori-navigation">
                                        <div className="histori-button-prev"><i className="fas fa-arrow-left"></i></div>
                                        <div className="histori-button-next active"><i className="fas fa-arrow-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default AboutBottom;
