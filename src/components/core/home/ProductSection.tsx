import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LightcaseOverlay from '../../../util/LightcaseOverlay';

const ProductSection = (): JSX.Element => {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [overlayContent, setOverlayContent] = useState({ src: '', title: '' });

    const products = [
        {
            imageUrl: "/assets/images/shop/01.jpg",
            product_title: "Daily Khao Authentic Sorer gawa Ghee 500Ml",
            product_price: "45.99",
            product_discount: "50%",
        },
        {
            imageUrl: "/assets/images/shop/02.jpg",
            product_title: "Daily Khao Authentic Sorer Gawa Ghee 1 Litre",
            product_price: "45.99",
            product_discount: "50%",
        },
        {
            imageUrl: "/assets/images/shop/03.jpg",
            product_title: "Daily Khao Pure Bengali Cow ghee 1litre",
            product_price: "45.99",
            product_discount: "50%",
        },
        {
            imageUrl: "/assets/images/shop/04.jpg",
            product_title: "Daily Khao pure Bengali Cow ghee 1500ml (1 Litre and 500ml Combo)",
            product_price: "45.99",
            product_discount: "50%",
        },
        {
            imageUrl: "/assets/images/shop/05.jpg",
            product_title: "Daily Khao Pure Bengali Cow Ghee 250ml (pack of 2)",
            product_price: "45.99",
            product_discount: "50%",
        },
        {
            imageUrl: "/assets/images/shop/06.jpg",
            product_title: "Daily Khao pure Bengali Cow ghee 1000ml (250ml Pack of 4)",
            product_price: "45.99",
            product_discount: "50%",
        },
    ]

    const showOverlay = (src: string, title: string) => {
        setOverlayContent({ src, title });
        setOverlayVisible(true);
    };

    const hideOverlay = () => {
        setOverlayVisible(false);
    };

    return (
        <>
            <section className="product pb-70">
                <div className="container">
                    <div className="section-header wow fadeInDown" data-wow-duration="1s" data-wow-delay=".1s">
                        <h2>Our Product</h2>
                        <h2><span>We Provided the Best Product </span></h2>
                        <p>Continually productize compelling quality for packed with Elated
                            Themes Setting up to website and it crating pages.</p>
                    </div>
                    <div className="section-wrapper row justify-content-center">
                        <div className="col-md-12">
                            <div className="our-product row justify-content-center">
                                {products.map((item, index) => (
                                    <div key={index} className="col-md-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                        <div className="post-item-inner text-center">
                                            <div className="post-thumb">
                                                <Link to="#" onClick={() => showOverlay(item?.imageUrl, item?.product_title)}>
                                                    <img src={item?.imageUrl} alt="product" />
                                                </Link>
                                            </div>
                                            <div className="post-content">
                                                <h4><Link to={`/product/details/${index}`}>{item?.product_title}</Link></h4>
                                                <ul className="rating">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star-half"></i></li>
                                                </ul>
                                                <p>(Review 3)</p>
                                                <span className="price">{item?.product_price}</span>
                                            </div>
                                            <Link to="#" className="offer">-{item?.product_discount}</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Link to="#" className="btn btn-m-t">View all Product</Link>
                    </div>
                </div>
            </section>

            {/* LightcaseOverlay */}
            {overlayVisible && <LightcaseOverlay src={overlayContent.src} title={overlayContent.title} onClose={hideOverlay} />}
        </>
    );
};

export default ProductSection;