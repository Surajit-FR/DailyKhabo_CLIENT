import { Link, useParams } from "react-router-dom";
import PageTopSection from "../../components/common/PageTopSection";
import { useEffect, useRef, useState } from "react";
import ReviewAndDesc from "../../components/core/product_details/ReviewAndDesc";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getAllReviews, getProductDetails } from "../../services/slices/UtilitySlice";
import ProductDetailsImageSlider from "../../components/core/products/product_content/ProductDetailsImageSlider";
import { CustomHeadersType, ReviewListType } from "../../config/DataTypes.config";
import { addToCart } from "../../helpers/CartFunctions";
import StarRating from "../../util/StarRating";
import { getAverageRating } from "../../helpers/Formatter";

type ProductDetailsProps = {
    _TOKEN: any,
    header: CustomHeadersType | undefined
}

const ProductDetails = ({ _TOKEN, header }: ProductDetailsProps): JSX.Element => {
    const { product_id } = useParams();
    const { products_details_data, review_data } = useSelector((state: any) => state.utilitySlice);
    const dispatch: Dispatch<any> = useDispatch();

    const [nav1, setNav1] = useState<any>(null);
    const [nav2, setNav2] = useState<any>(null);
    const [reviewsData, setReviewsData] = useState<Array<ReviewListType>>([]);
    const sliderRef1 = useRef<any>(null);
    const sliderRef2 = useRef<any>(null);
    const [value, setValue] = useState<number>(1);

    const decrement = () => {
        if (value > 1) {
            setValue(value - 1);
        }
    };

    const increment = () => {
        setValue(value + 1);
    };

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    useEffect(() => {
        dispatch(getProductDetails({ product_id: product_id }))
        dispatch(getAllReviews({ product_id }));
    }, [dispatch, product_id]);
    useEffect(() => {
    }, [dispatch, product_id]);

    useEffect(() => {
        setReviewsData(review_data?.data);
    }, [review_data]);


    const styles = {
        offerBadge: {
            marginRight: '15px',
            fontSize: "20px",
            background: "#66a21b",
            width: "auto",
            color: "#fff",
            borderRadius: "50px",
            padding: "4px 10px"
        },
        priceStrikethrough: {
            textDecoration: 'line-through',
            marginRight: '15px',
            fontSize: "20px",
            color: "#818181"
        },
        price: {
            marginRight: '10px'
        }
    };

    return (
        <>
            <PageTopSection pageName="Product Details" />
            <section className="shop-single padding-tb">
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
                                                <StarRating
                                                    rating={getAverageRating(products_details_data?.data?.review)}
                                                    readOnly
                                                    showText={false}
                                                    starSize={14}
                                                />
                                                ({reviewsData?.length} reviews)
                                            </p>
                                            {products_details_data?.data?.offer === "true" && (
                                                <div>
                                                    <span style={styles.offerBadge}>
                                                        {products_details_data?.data?.offerPercentage}% Off
                                                    </span>
                                                </div>
                                            )}
                                            <h4>
                                                {products_details_data?.data?.offer === "true" && (
                                                    <span style={styles.priceStrikethrough}>
                                                        ₹ {products_details_data?.data?.price}
                                                    </span>
                                                )}
                                                <span style={styles.price}>
                                                    ₹ {products_details_data?.data?.finalPrice}
                                                </span>
                                            </h4>
                                            <h5>Product Description</h5>
                                            <p>{products_details_data?.data?.productDescription}</p>
                                            <form>
                                                {/* <div className="select-product size">
                                                    <select>
                                                        <option>Select Size</option>
                                                        <option>L</option>
                                                        <option>gm.</option>
                                                        <option>kg.</option>
                                                    </select>
                                                    <i className="fas fa-angle-down"></i>
                                                </div> */}

                                                <div className="cart-plus-minus">
                                                    <div className="dec qtybutton" onClick={decrement}>-</div>
                                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" value={value} readOnly />
                                                    <div className="inc qtybutton" onClick={increment}>+</div>
                                                </div>

                                                {/* <div className="discount-code">
                                                    <input type="text" placeholder="Enter Discount Code" />
                                                </div> */}
                                                <button
                                                    type="button"
                                                    data-toggle={_TOKEN ? "" : "modal"}
                                                    data-target={_TOKEN ? "" : "#exampleAuthModal"}
                                                    onClick={() => {
                                                        if (_TOKEN) {
                                                            addToCart({ product: products_details_data?.data?._id, cart_quantity: value, dispatch, header });
                                                        }
                                                    }}
                                                >Add To Cart</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ReviewAndDesc
                                products_details_data={products_details_data?.data}
                                product_id={product_id}
                                _TOKEN={_TOKEN}
                                header={header}
                            />
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
};

export default ProductDetails;