import { Link, useParams } from "react-router-dom";
import PageTopSection from "../../components/common/PageTopSection";
import { useEffect, useRef, useState } from "react";
import ReviewAndDesc from "../../components/core/product_details/ReviewAndDesc";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getProductDetails } from "../../services/slices/UtilitySlice";
import ProductDetailsImageSlider from "../../components/core/products/product_content/ProductDetailsImageSlider";
import { CustomHeadersType } from "../../config/DataTypes.config";
import IncrementDecrement from "../../util/IncrementDecrement";

type ProductDetails_props = {
    _TOKEN: any,
    header: CustomHeadersType
}

const ProductDetails = ({ _TOKEN, header }: ProductDetails_props): JSX.Element => {
    const { product_id } = useParams();
    const { products_details_data } = useSelector((state: any) => state.utilitySlice);
    const dispatch: Dispatch<any> = useDispatch();

    const [nav1, setNav1] = useState<any>(null);
    const [nav2, setNav2] = useState<any>(null);
    const sliderRef1 = useRef<any>(null);
    const sliderRef2 = useRef<any>(null);

    const shopSingleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    useEffect(() => {
        dispatch(getProductDetails({ product_id: product_id }))
    }, [dispatch, product_id]);

    useEffect(() => {
        if (shopSingleRef.current) {
            shopSingleRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            {/* PageHeader Section */}
            <PageTopSection pageName="Product Details" />

            <section className="shop-single padding-tb" ref={shopSingleRef}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12 sticky-widget">
                            <div className="product-details">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="product-thumb">
                                            <ProductDetailsImageSlider
                                                products_details_data={products_details_data}
                                                nav2={nav2}
                                                sliderRef1={sliderRef1}
                                                nav1={nav1}
                                                sliderRef2={sliderRef2}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="post-content">
                                            <h4>
                                                <Link to="#">{products_details_data?.data?.productTitle}</Link>
                                            </h4>
                                            <p className="rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                (3 review)
                                            </p>
                                            <h4>₹ {products_details_data?.data?.price}</h4>
                                            <h5>Product Description</h5>
                                            <p>{products_details_data?.data?.productDescription}</p>
                                            <form>
                                                <div className="select-product size">
                                                    <select>
                                                        <option>Select Size</option>
                                                        <option>L</option>
                                                        <option>gm.</option>
                                                        <option>kg.</option>
                                                    </select>
                                                    <i className="fas fa-angle-down"></i>
                                                </div>
                                                {/* <div className="select-product color">
                                                    <select>
                                                        <option>Select Color</option>
                                                        <option>Pink</option>
                                                        <option>Ash</option>
                                                        <option>Red</option>
                                                        <option>White</option>
                                                        <option>Blue</option>
                                                    </select>
                                                    <i className="fas fa-angle-down"></i>
                                                </div> */}
                                                <IncrementDecrement initialValue={1} />
                                                <div className="discount-code">
                                                    <input type="text" placeholder="Enter Discount Code" />
                                                </div>
                                                <button type="button" data-toggle={_TOKEN ? "" : "modal"} data-target={_TOKEN ? "" : "#exampleAuthModal"}>Add To Cart</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product review & desc. */}
                            <ReviewAndDesc
                                products_details_data={products_details_data?.data}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;