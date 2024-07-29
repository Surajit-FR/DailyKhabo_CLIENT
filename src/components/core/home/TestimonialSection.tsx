import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { getTestimonials } from '../../../services/slices/UtilitySlice';
import { UserMessage } from '../../../types/review';

// Use SwiperCore
SwiperCore.use([Navigation, Autoplay]);

const TestimonialSection = (): JSX.Element => {
    const { testimonials_data } = useSelector((state: any) => state.utilitySlice);
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(getTestimonials())
    }, [dispatch]);

    return (
        <>
            {testimonials_data?.length > 0 &&
                <section className="testimonial style-2 pt-70">
                    <div className="container">
                        <div className="section-header w-100 wow fadeInDown" data-wow-duration="1s" data-wow-delay=".1s">
                            <h2>Testimonials</h2>
                            <h2><span> Listen to what my clients say</span></h2>
                        </div>
                        <div className="section-wrapper">
                            <div className="testimonial-slider">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    slidesPerView={1}
                                    spaceBetween={20}
                                    loop={true}
                                    autoplay={{
                                        delay: 3200,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        el: '.testimonial-pagination',
                                        clickable: true,
                                    }}
                                    navigation={{
                                        nextEl: '.testimonial-button-next',
                                        prevEl: '.testimonial-button-prev',
                                    }}
                                    breakpoints={{
                                        576: {
                                            spaceBetween: 0,
                                        },
                                    }}
                                >
                                    {
                                        testimonials_data?.map((item: UserMessage) =>
                                            item?.is_highlighted && (
                                                <SwiperSlide key={item?._id}>
                                                    <div className="swiper-slide">
                                                        <div className="testi-item">
                                                            <div className="testi-content">
                                                                <img src="assets/images/testimonial/icon/03.png" alt="testimonial" />
                                                                <p>{item?.message}</p>
                                                                <div className="testimonial-author">
                                                                    <div className="author-name-des">
                                                                        <h4>{item?.full_name}</h4>
                                                                        <p>{item?.designation}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        )
                                    }
                                </Swiper>
                                <div className="testimonial-button-prev"><i className="fas fa-chevron-left"></i></div>
                                <div className="testimonial-button-next"><i className="fas fa-chevron-right"></i></div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    );
};

export default TestimonialSection;