import { Link } from "react-router-dom";
import PageTopSection from "../../components/common/PageTopSection";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ReviewAndDesc from "../../components/core/product_details/ReviewAndDesc";

const ProductDetails = (): JSX.Element => {
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
            {/* PageHeader Section */}
            <PageTopSection pageName="Product Details" />

            <section className="shop-single padding-tb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12 sticky-widget">
                            <div className="product-details">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="product-thumb">
                                            <div className="slider-for">
                                                <Slider
                                                    asNavFor={nav2}
                                                    ref={sliderRef1}
                                                >
                                                    <div className="thumb">
                                                        <img id="myimage8" src="/assets/images/shop/02.jpg" alt="shopZoom" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img id="myimage1" src="/assets/images/shop/03.jpg" alt="shopZoom" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img id="myimage2" src="/assets/images/shop/04.jpg" alt="shopZoom" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img id="myimage3" src="/assets/images/shop/05.jpg" alt="shopZoom" />
                                                    </div>
                                                    <div className="thumb">
                                                        <img id="myimage4" src="/assets/images/shop/06.jpg" alt="shopZoom" />
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
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="post-content">
                                            <h4><Link to="#">Product Text here</Link></h4>
                                            <p className="rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                (3 review)
                                            </p>
                                            <h4>
                                                $ 200.00
                                            </h4>
                                            <h5>
                                                Product Description
                                            </h5>
                                            <p>
                                                Energistia an deliver atactica metrcs after avsionary Apropria trnsition
                                                enterpris an sources applications emerging psd template communities.
                                            </p>
                                            <form>
                                                <div className="select-product size">
                                                    <select>
                                                        <option>Select Size</option>
                                                        <option>SM</option>
                                                        <option>MD</option>
                                                        <option>LG</option>
                                                        <option>XL</option>
                                                        <option>XXL</option>
                                                    </select>
                                                    <i className="fas fa-angle-down"></i>
                                                </div>
                                                <div className="select-product color">
                                                    <select>
                                                        <option>Select Color</option>
                                                        <option>Pink</option>
                                                        <option>Ash</option>
                                                        <option>Red</option>
                                                        <option>White</option>
                                                        <option>Blue</option>
                                                    </select>
                                                    <i className="fas fa-angle-down"></i>
                                                </div>
                                                <div className="cart-plus-minus">
                                                    <div className="dec qtybutton">-</div>
                                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue="1" />
                                                    <div className="inc qtybutton">+</div>
                                                </div>
                                                <div className="discount-code">
                                                    <input type="text" placeholder="Enter Discount Code" />
                                                </div>
                                                <button type="submit">Add To Cart</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product review & desc. */}
                            <ReviewAndDesc />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;