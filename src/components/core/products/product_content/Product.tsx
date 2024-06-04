import { Link } from 'react-router-dom';

const Product = (): JSX.Element => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="product-item">
                    <div className="product-thumb">
                        <img src="/assets/images/shop/01.jpg" alt="shop" />
                        <div className="product-action-link">
                            <Link to="#" className="view-modal" data-toggle="modal" data-target="#product_view"><i className="far fa-eye"></i></Link>
                            <Link to="#"><i className="far fa-heart"></i></Link>
                            <Link to="#"><i className="fas fa-cart-plus"></i></Link>
                            <Link to="#"><i className="fas fa-sync-alt"></i></Link>
                        </div>
                    </div>
                    <div className="product-content">
                        <h5><Link to="/product/details/123">Daily Khao Authentic Sorer gawa Ghee 500Ml</Link></h5>
                        <p>
                            <i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i> <span>(3 review)</span>
                        </p>
                        <h6>$20</h6>
                    </div>
                </div>
                <div className="product-list-item">
                    <div className="product-thumb">
                        <img src="/assets/images/shop/01.jpg" alt="shop" />
                        <div className="product-action-link">
                            <Link to="#" className="view-modal" data-toggle="modal" data-target="#product_view"><i className="far fa-eye"></i></Link>
                            <Link to="#"><i className="far fa-heart"></i></Link>
                            <Link to="#"><i className="fas fa-cart-plus"></i></Link>
                            <Link to="#"><i className="fas fa-sync-alt"></i></Link>
                        </div>
                    </div>
                    <div className="product-content">
                        <h5><Link to="#">Daily Khao Authentic Sorer gawa Ghee 500Ml</Link></h5>
                        <p>
                            <i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i> <span>(3 review)</span>
                        </p>
                        <h6>
                            $20
                        </h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;