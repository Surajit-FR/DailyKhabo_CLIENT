import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const ProductModal = (): JSX.Element => {
    const [nav1, setNav1] = useState<any>(null);
    const [nav2, setNav2] = useState<any>(null);
    const sliderRef1 = useRef<any>(null);
    const sliderRef2 = useRef<any>(null);

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    return (
        <>
            <div className="modal" id="product_view">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal"><i className="fas fa-window-close"></i></button>
                        <div className="modal-body">
                            <div className="product-details-inner">
                                <div className="row">
                                    <div className="col-lg-5 col-12">
                                        <div className="popup-slide">
                                            <div className="slider-for">

                                                <Slider
                                                    asNavFor={nav2}
                                                    ref={sliderRef1}
                                                >
                                                    <div className="thumb">
                                                        <img src="/assets/images/shop/01.jpg" alt="shop" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img src="/assets/images/shop/02.jpg" alt="shop" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img src="/assets/images/shop/03.jpg" alt="shop" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img src="/assets/images/shop/04.jpg" alt="shop" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img src="/assets/images/shop/05.jpg" alt="shop" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img src="/assets/images/shop/06.jpg" alt="shop" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img src="/assets/images/shop/07.jpg" alt="shop" />
                                                    </div>
                                                </Slider>
                                            </div>
                                            <div className="slider-nav">
                                                <Slider
                                                    asNavFor={nav1}
                                                    ref={sliderRef2}
                                                    slidesToShow={3}
                                                    swipeToSlide={true}
                                                    focusOnSelect={true}
                                                >
                                                    <div className="thumb">
                                                        <img src="/assets/images/shop/01.jpg" alt="shop" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img src="/assets/images/shop/02.jpg" alt="shop" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img src="/assets/images/shop/03.jpg" alt="shop" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img src="/assets/images/shop/04.jpg" alt="shop" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img src="/assets/images/shop/05.jpg" alt="shop" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img src="/assets/images/shop/06.jpg" alt="shop" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img src="/assets/images/shop/07.jpg" alt="shop" />
                                                    </div>
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="product-content">
                                            <h5><Link to="#">Product Title Here</Link></h5>
                                            <p>
                                                <i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i> <span>(3 review)</span>
                                            </p>
                                            <h6>
                                                $200
                                            </h6>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            </p>
                                        </div>
                                        <div className="cart-button">
                                            <div className="cart-plus-minus">
                                                <div className="dec qtybutton">-</div>
                                                <input className="cart-plus-minus-box" type="text" name="qtybutton" value="2" />
                                                <div className="inc qtybutton">+</div>
                                            </div>
                                            <Link to="#" className="defult-btn">Add to Cart <i className="fas fa-cart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductModal;