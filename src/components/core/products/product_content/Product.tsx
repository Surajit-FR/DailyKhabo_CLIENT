import { Link } from 'react-router-dom';
import { CustomHeadersType, ProductListType } from '../../../../config/DataTypes.config';
import { getImagUrl } from '../../../../helpers/getImage';
import { addToCart } from '../../../../helpers/CartFunctions';
import { Dispatch } from 'redux';
import { getAverageRating } from '../../../../helpers/Formatter';
import StarRating from '../../../../util/StarRating';

type ProductsProps = {
    _TOKEN: any,
    item?: ProductListType;
    header: CustomHeadersType | undefined;
    dispatch: Dispatch<any>
};

const Product = ({ item, _TOKEN, header, dispatch }: ProductsProps): JSX.Element => {
    const styles = {
        offerBadge: {
            display: (item?.offer !== "true") ? "none" : "block",
            background: "#66a21b",
            color: "#fff",
            marginBottom: "10px",
            padding: "0 10px",
            borderRadius: "50px",
            width: "55px"
        },
        priceStrikethrough: {
            textDecoration: 'line-through',
            marginRight: '15px',
            color: "#818181",
            display: (item?.offer !== "true") ? "none" : "inline"
        }
    };

    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="product-item">
                <Link to="#" style={styles.offerBadge}>-{item?.offerPercentage}%</Link>
                <div className="product-thumb">
                    <img src={getImagUrl(item?.productImages[0])} alt="shop" />
                    <div className="product-action-link">
                        <Link to={`/product/details/${item?._id}`}>
                            <i className="far fa-eye"></i>
                        </Link>
                        <Link
                            to="#"
                            data-toggle={_TOKEN ? "" : "modal"}
                            data-target={_TOKEN ? "" : "#exampleAuthModal"}
                            onClick={() => {
                                if (_TOKEN) {
                                    addToCart({ product: item?._id, cart_quantity: 1, dispatch, header })
                                }
                            }}
                        ><i className="fas fa-cart-plus"></i>
                        </Link>
                    </div>
                </div>
                <div className="product-content">
                    <h5>
                        <Link to={`/product/details/${item?._id}`}>
                            {item?.productTitle}
                        </Link>
                    </h5>

                    <p>
                        <StarRating
                            rating={getAverageRating(item?.review)}
                            readOnly
                            showText={true}
                            starSize={14}
                            text={`(${item?.review?.length} reviews)`}
                        />
                    </p>
                    <h6>
                        <span style={styles.priceStrikethrough}>
                            ₹ {item?.price}
                        </span>
                        <span>₹ {item?.finalPrice}</span>
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Product;