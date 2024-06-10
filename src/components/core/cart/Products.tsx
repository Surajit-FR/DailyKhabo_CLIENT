import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import IncrementDecrement from "../../../util/IncrementDecrement";


const Products = (): JSX.Element => {
    const navigate = useNavigate();
    const shopSingleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (shopSingleRef.current) {
            shopSingleRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            <div className="shop-cart padding-tb" ref={shopSingleRef}>
                <div className="container">
                    <div className="section-wrapper">
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="product-item">
                                            <div className="p-thumb">
                                                <Link to="#"><img src="/assets/images/shop/01.jpg" alt="product" /></Link>
                                            </div>
                                            <div className="p-content">
                                                <Link to="#">Product Text Here</Link>
                                            </div>
                                        </td>
                                        <td>₹250</td>
                                        <td><IncrementDecrement initialValue={1} /></td>
                                        <td>₹750</td>
                                        <td>
                                            <Link to="#"><img src="/assets/images/shop/del.png" alt="product" /></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="cart-bottom">
                            <div className="cart-checkout-box">
                                <div className="coupon">
                                    <input type="text" name="coupon" placeholder="Coupon Code..." className="cart-page-input-text" />
                                    <input type="submit" value="Apply Coupon" />
                                </div>
                                <div className="cart-checkout">
                                    <input type="submit" value="Update Cart" />
                                    <input type="submit" value="Proceed to Checkout" onClick={() => navigate('/checkout')} />
                                </div>
                            </div>
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>Calculate Shipping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="volvo">United Kingdom (UK)</option>
                                                    <option value="saab">Bangladesh</option>
                                                    <option value="saab">Pakisthan</option>
                                                    <option value="saab">India</option>
                                                    <option value="saab">Nepal</option>
                                                </select>
                                                <span className="select-icon"><i className="fa fa-angle-down"
                                                    aria-hidden="true"></i></span>
                                            </div>
                                            <div className="outline-select shipping-select">
                                                <select>
                                                    <option value="volvo">State/Country</option>
                                                    <option value="saab">Dhaka</option>
                                                    <option value="saab">Benkok</option>
                                                    <option value="saab">Kolkata</option>
                                                    <option value="saab">Kapasia</option>
                                                </select>
                                                <span className="select-icon"><i className="fa fa-angle-down"
                                                    aria-hidden="true"></i></span>
                                            </div>
                                            <input type="text" name="coupon" placeholder="Postcode/ZIP"
                                                className="cart-page-input-text" />
                                            <button type="submit">Update Total</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <h3>Cart Totals</h3>
                                            <ul>
                                                <li>
                                                    <span className="pull-left">Cart Subtotal</span>
                                                    <p className="pull-right">₹ 0.00</p>
                                                </li>
                                                <li>
                                                    <span className="pull-left">Shipping and Handling</span>
                                                    <p className="pull-right">Free Shipping</p>
                                                </li>
                                                <li>
                                                    <span className="pull-left">Order Total</span>
                                                    <p className="pull-right">₹ 2940.00</p>
                                                </li>
                                            </ul>
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

export default Products;