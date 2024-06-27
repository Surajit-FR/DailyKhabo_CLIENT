import { Link } from "react-router-dom";
import IncrementDecrement from "../../../util/IncrementDecrement";
import { CartItemType, CustomHeadersType } from "../../../config/DataTypes.config";
import { getImagUrl } from "../../../helpers/getImage";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { deleteItem } from "../../../helpers/CartFunctions";

type CartProducts_props = {
    cartData: Array<CartItemType>;
    SubTotalAmount: number;
    DiscountAmount: number,
    ShippingCharge: number;
    TotalAmountWithShipping: number;
    header: CustomHeadersType | undefined
}

const Products = ({ cartData, SubTotalAmount, DiscountAmount, header, ShippingCharge, TotalAmountWithShipping }: CartProducts_props): JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch();

    return (
        <>
            <div className="shop-cart padding-tb">
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
                                    {
                                        cartData && cartData?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="product-item">
                                                        <div className="p-thumb">
                                                            <Link to="#"><img src={getImagUrl(item?.product?.productImages[0])} alt="product" height={85} width={121.67} /></Link>
                                                        </div>
                                                        <div className="p-content">
                                                            <Link to={`/product/details/${item?.product?._id}`}>{item?.product?.productTitle}</Link>
                                                        </div>
                                                    </td>
                                                    <td>₹{item?.product?.finalPrice}</td>
                                                    <td>
                                                        <IncrementDecrement
                                                            initialValue={item?.cart_quantity}
                                                            product_id={item?.product?._id}
                                                            dispatch={dispatch}
                                                            header={header}
                                                            pageName="cart"
                                                        />
                                                    </td>
                                                    <td>₹{item?.product?.totalPrice}</td>
                                                    <td>
                                                        <Link to="#" onClick={() => deleteItem({ product_id: item?.product?._id, dispatch, header })}><img src="/assets/images/shop/del.png" alt="product" /></Link>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="cart-bottom">
                            <div className="shiping-box">
                                <div className="row">

                                    {/* Cart Totals */}
                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <p className="pull-right">*Free shipping available after purcahse of ₹2500/-</p>
                                            <h3>Cart Totals</h3>
                                            <ul>
                                                <li>
                                                    <span className="pull-left">Cart Subtotal</span>
                                                    <p className="pull-right">₹ {SubTotalAmount}</p>
                                                </li>
                                                <li>
                                                    <span className="pull-left">Shipping and Handling</span>
                                                    <p className="pull-right">₹ {ShippingCharge}</p>
                                                    {/* {ShippingCharge !== 0 ? <p className="pull-right">₹ {ShippingCharge}</p> : <p className="pull-right">Free Shipping</p>} */}
                                                </li>
                                                {
                                                    DiscountAmount > 0 &&
                                                    <li>
                                                        <span className="pull-left">Discount</span>
                                                        <p className="pull-right">&#8722; ₹ {DiscountAmount}</p>
                                                    </li>
                                                }
                                                <li>
                                                    <span className="pull-left">Order Total</span>
                                                    <p className="pull-right">₹ {TotalAmountWithShipping}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Calculate Shipping */}
                                    {/* <div className="col-md-6 col-12">
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
                                                    <option value="volvo">State</option>
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
                                    </div> */}

                                    {/* Proceed to Checkout */}
                                    <div className="col-md-6 col-12 cart-checkout-box">
                                        <div className="cart-checkout">
                                            <Link className="btn" to="/checkout">Proceed to Checkout<i className="fa-solid fa-arrow-right-long mx-2"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Products;