import { useState } from 'react';
import { Link } from 'react-router-dom';
import LightcaseOverlay from '../../../util/LightcaseOverlay';
import { ProductResponse } from '../../../config/DataTypes.config';
import { getImagUrl } from '../../../helpers/getImage';

type ProductSection_props = {
    productData: ProductResponse[];
};

const ProductSection = ({ productData }: ProductSection_props): JSX.Element => {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [overlayContent, setOverlayContent] = useState({ src: '', title: '' });

    const showOverlay = (src: string, title: string) => {
        setOverlayContent({ src, title });
        setOverlayVisible(true);
    };

    const hideOverlay = () => {
        setOverlayVisible(false);
    };

    const styles = {
        offerBadge: {
            display: "none",
        },
        priceStrikethrough: {
            textDecoration: 'line-through',
            marginRight: '15px',
            color: "#818181",
            display: "none",
        }
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
                                {productData?.map((item: any, index) => (
                                    <div key={index} className="col-md-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                        <div className="post-item-inner text-center">
                                            <div className="post-thumb">
                                                <Link to="#" onClick={() => showOverlay(item?.productImages[0], item?.productTitle)}>
                                                    <img src={getImagUrl(item?.productImages[0])} alt="product" />
                                                </Link>
                                            </div>
                                            <div className="post-content">
                                                <h4>
                                                    <Link to={`/product/details/${item?._id}`}>{item?.productTitle}</Link>
                                                </h4>
                                                <ul className="rating">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star-half"></i></li>
                                                </ul>
                                                <p>(Review 3)</p>
                                                <span className="price"
                                                    style={{ ...styles.priceStrikethrough, display: (item?.offer !== "true") ? "none" : "" }}>₹ {item?.price}</span>
                                                <span className="price">₹ {item?.finalPrice}</span>
                                            </div>
                                            <Link to="#" className="offer" style={{ ...styles.offerBadge, display: (item?.offer !== "true") ? "none" : "" }}>-{item?.offerPercentage}%</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Link to={`/product/All Products`} className="btn btn-m-t">View all Product</Link>
                    </div>
                </div>
            </section >

            {/* LightcaseOverlay */}
            {
                overlayVisible && <LightcaseOverlay
                    src={overlayContent?.src}
                    title={overlayContent?.title}
                    onClose={hideOverlay}
                />
            }
        </>
    );
};

export default ProductSection;