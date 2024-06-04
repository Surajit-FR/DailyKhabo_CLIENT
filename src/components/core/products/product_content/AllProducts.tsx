import { useState } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product';
import ProductModal from '../../../../util/ProductModal';

const AllProducts = (): JSX.Element => {
    const [toggleWrap, setToggleWrap] = useState<boolean>(false);

    return (
        <>
            <section className="shop-page padding-tb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12 sticky-widget">
                            <div className="shop-title d-flex flex-wrap justify-content-between">
                                <p>Showing 01 - 12 of 139 Results</p>
                                <div className="product-view-mode">
                                    <Link to="#" onClick={() => setToggleWrap(!toggleWrap)} className={!toggleWrap ? "active" : ""} data-target="grid"><i className="fas fa-th"></i></Link>
                                    <Link to="#" onClick={() => setToggleWrap(!toggleWrap)} className={toggleWrap ? "active" : ""} data-target="list"><i className="fas fa-list"></i></Link>
                                </div>
                            </div>

                            <div className={!toggleWrap ? "shop-product-wrap grid row" : "shop-product-wrap list row"}>
                                <Product />
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <img src="/assets/images/shop/02.jpg" alt="shop" />
                                            <div className="product-action-link">
                                                <Link to="#" className="view-modal" data-toggle="modal" data-target="#product_view"><i className="far fa-eye"></i></Link>
                                                <Link to="#"><i className="far fa-heart"></i></Link>
                                                <Link to="#"><i className="fas fa-cart-plus"></i></Link>
                                                <Link to="#"><i className="fas fa-sync-alt"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5><Link to="/product/details/123">Daily Khao Authentic Sorer Gawa Ghee 1 Litre</Link></h5>
                                            <p>
                                                <i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i> <span>(3 review)</span>
                                            </p>
                                            <h6>$20</h6>
                                        </div>
                                    </div>
                                    <div className="product-list-item">
                                        <div className="product-thumb">
                                            <img src="/assets/images/shop/02.jpg" alt="shop" />
                                            <div className="product-action-link">
                                                <Link to="#" className="view-modal" data-toggle="modal" data-target="#product_view"><i className="far fa-eye"></i></Link>
                                                <Link to="#"><i className="far fa-heart"></i></Link>
                                                <Link to="#"><i className="fas fa-cart-plus"></i></Link>
                                                <Link to="#"><i className="fas fa-sync-alt"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5><Link to="/product/details/123">Daily Khao Authentic Sorer Gawa Ghee 1 Litre</Link></h5>
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
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <img src="/assets/images/shop/03.jpg" alt="shop" />
                                            <div className="product-action-link">
                                                <Link to="#" className="view-modal" data-toggle="modal" data-target="#product_view"><i className="far fa-eye"></i></Link>
                                                <Link to="#"><i className="far fa-heart"></i></Link>
                                                <Link to="#"><i className="fas fa-cart-plus"></i></Link>
                                                <Link to="#"><i className="fas fa-sync-alt"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5><Link to="/product/details/123">Daily Khao Pure Bengali Cow ghee 1litre</Link></h5>
                                            <p>
                                                <i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i> <span>(3 review)</span>
                                            </p>
                                            <h6>$20</h6>
                                        </div>
                                    </div>
                                    <div className="product-list-item">
                                        <div className="product-thumb">
                                            <img src="/assets/images/shop/03.jpg" alt="shop" />
                                            <div className="product-action-link">
                                                <Link to="#" className="view-modal" data-toggle="modal" data-target="#product_view"><i className="far fa-eye"></i></Link>
                                                <Link to="#"><i className="far fa-heart"></i></Link>
                                                <Link to="#"><i className="fas fa-cart-plus"></i></Link>
                                                <Link to="#"><i className="fas fa-sync-alt"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5><Link to="/product/details/123">Daily Khao Pure Bengali Cow ghee 1litre</Link></h5>
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
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <img src="/assets/images/shop/04.jpg" alt="shop" />
                                            <div className="product-action-link">
                                                <Link to="#" className="view-modal" data-toggle="modal" data-target="#product_view"><i className="far fa-eye"></i></Link>
                                                <Link to="#"><i className="far fa-heart"></i></Link>
                                                <Link to="#"><i className="fas fa-cart-plus"></i></Link>
                                                <Link to="#"><i className="fas fa-sync-alt"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5><Link to="/product/details/123">Daily Khao pure Bengali Cow ghee 1500ml (1 Litre and 500ml Combo)</Link></h5>
                                            <p>
                                                <i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i> <span>(3 review)</span>
                                            </p>
                                            <h6>$20</h6>
                                        </div>
                                    </div>
                                    <div className="product-list-item">
                                        <div className="product-thumb">
                                            <img src="/assets/images/shop/04.jpg" alt="shop" />
                                            <div className="product-action-link">
                                                <Link to="#" className="view-modal" data-toggle="modal" data-target="#product_view"><i className="far fa-eye"></i></Link>
                                                <Link to="#"><i className="far fa-heart"></i></Link>
                                                <Link to="#"><i className="fas fa-cart-plus"></i></Link>
                                                <Link to="#"><i className="fas fa-sync-alt"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5><Link to="/product/details/123">Daily Khao pure Bengali Cow ghee 1500ml (1 Litre and 500ml Combo)</Link></h5>
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
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <img src="/assets/images/shop/05.jpg" alt="shop" />
                                            <div className="product-action-link">
                                                <Link to="#" className="view-modal" data-toggle="modal" data-target="#product_view"><i className="far fa-eye"></i></Link>
                                                <Link to="#"><i className="far fa-heart"></i></Link>
                                                <Link to="#"><i className="fas fa-cart-plus"></i></Link>
                                                <Link to="#"><i className="fas fa-sync-alt"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5><Link to="/product/details/123">Daily Khao Pure Bengali Cow Ghee 250ml (pack of 2)</Link></h5>
                                            <p>
                                                <i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i> <span>(3 review)</span>
                                            </p>
                                            <h6>$20</h6>
                                        </div>
                                    </div>
                                    <div className="product-list-item">
                                        <div className="product-thumb">
                                            <img src="/assets/images/shop/05.jpg" alt="shop" />
                                            <div className="product-action-link">
                                                <Link to="#" className="view-modal" data-toggle="modal" data-target="#product_view"><i className="far fa-eye"></i></Link>
                                                <Link to="#"><i className="far fa-heart"></i></Link>
                                                <Link to="#"><i className="fas fa-cart-plus"></i></Link>
                                                <Link to="#"><i className="fas fa-sync-alt"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5><Link to="/product/details/123">Daily Khao Pure Bengali Cow Ghee 250ml (pack of 2)</Link></h5>
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
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <img src="/assets/images/shop/06.jpg" alt="shop" />
                                            <div className="product-action-link">
                                                <Link to="#" className="view-modal" data-toggle="modal" data-target="#product_view"><i className="far fa-eye"></i></Link>
                                                <Link to="#"><i className="far fa-heart"></i></Link>
                                                <Link to="#"><i className="fas fa-cart-plus"></i></Link>
                                                <Link to="#"><i className="fas fa-sync-alt"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5><Link to="/product/details/123">Daily Khao pure Bengali Cow ghee 1000ml (250ml Pack of 4)</Link></h5>
                                            <p>
                                                <i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i> <span>(3 review)</span>
                                            </p>
                                            <h6>$20</h6>
                                        </div>
                                    </div>
                                    <div className="product-list-item">
                                        <div className="product-thumb">
                                            <img src="/assets/images/shop/06.jpg" alt="shop" />
                                            <div className="product-action-link">
                                                <Link to="#" className="view-modal" data-toggle="modal" data-target="#product_view"><i className="far fa-eye"></i></Link>
                                                <Link to="#"><i className="far fa-heart"></i></Link>
                                                <Link to="#"><i className="fas fa-cart-plus"></i></Link>
                                                <Link to="#"><i className="fas fa-sync-alt"></i></Link>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h5><Link to="/product/details/123">Daily Khao pure Bengali Cow ghee 1000ml (250ml Pack of 4)</Link></h5>
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
                            </div>

                            <div className="pagination-area  d-flex flex-wrap justify-content-center">
                                <ul className="pagination  d-flex flex-wrap m-0">
                                    <li className="prev">
                                        <Link to="#"><i className="fas fa-angle-double-left"></i></Link>
                                    </li>
                                    <li><Link to="#">1</Link></li>
                                    <li><Link to="#" className="active d-none d-md-block">2</Link></li>
                                    <li><Link to="#" className="d-none d-md-block">3</Link></li>
                                    <li className="dot">....</li>
                                    <li><Link to="#" className="d-none d-md-block">4</Link></li>
                                    <li className="next">
                                        <Link to="#"><i className="fas fa-angle-double-right"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Product Modal */}
                    <ProductModal />
                </div>
            </section>
        </>
    );
};

export default AllProducts;