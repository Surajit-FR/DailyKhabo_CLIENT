import { Link } from 'react-router-dom';
import { ProductListType } from '../../../../config/DataTypes.config';
import { getImagUrl } from '../../../../helpers/getImage';

type ProductsProps = {
    item?: ProductListType;
};

const Product = ({ item }: ProductsProps): JSX.Element => {
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
                        <Link to="#">
                            <i className="fas fa-cart-plus"></i>
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
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <span>(3 reviews)</span>
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