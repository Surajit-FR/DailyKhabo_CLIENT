import { Link } from "react-router-dom";
import { getImagUrl } from "../../../helpers/getImage";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { applyCoupon } from "../../../helpers/CartFunctions";
import { CartItem } from "../../../types/cart";
import { CustomHeaders } from "../../../types/common.";

type OrderSummary_props = {
    cartData: Array<CartItem>,
    couponCode: string,
    setCouponCode: Function,
    header: CustomHeaders | undefined,
    SubTotalAmount: number,
    DiscountAmount: number,
    ShippingCharge: number,
    TotalAmountWithShipping: number,
}

const OrderSummary = ({ cartData, SubTotalAmount, header, couponCode, setCouponCode, ShippingCharge, TotalAmountWithShipping, DiscountAmount }: OrderSummary_props): JSX.Element => {
    const dispatch: Dispatch<any> = useDispatch();

    const handleCouponChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCouponCode(event.target.value);
    };

    return (
        <>
            <div className="col-lg-5">
                <h4 className="summary1">Order summary</h4>
                <table className="checkout_tabels">
                    <tbody>
                        {cartData && cartData?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td width="15%">
                                        <img src={getImagUrl(item?.product?.productImages[0])} alt="product" height={30} width={45} />
                                    </td>
                                    <td width="60%">{item?.product?.productTitle}</td>
                                    <td width="10%">{item?.cart_quantity}</td>
                                    <td width="15%">₹{item?.product?.totalPrice}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <table className="checkout_tabels">
                    <tbody>
                        <tr>
                            <td width="70%">
                                <input
                                    className="code_1"
                                    type="text"
                                    placeholder="Enter Coupon code"
                                    onChange={handleCouponChange}
                                    value={couponCode}
                                    maxLength={10}
                                />
                            </td>
                            <td width="30%">
                                <Link to="#" className="btn ml-2 mb-1" onClick={() => applyCoupon({ couponCode, dispatch, header })}>Apply</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="checkout_tabels">
                    <tbody>
                        <tr>
                            <td width="50%">Subtotal</td>
                            <td className="text-right" width="50%"><b>₹{SubTotalAmount}</b></td>
                        </tr>
                        {
                            DiscountAmount > 0 &&
                            <tr>
                                <td width="50%">Discount</td>
                                <td className="text-right" width="50%"><p>&#8722; ₹{DiscountAmount}</p></td>
                            </tr>
                        }
                        <tr>
                            <td width="50%">Shipping and Handling</td>
                            <td className="text-right" width="50%"><p>₹{ShippingCharge}</p></td>
                            {/* <td className="text-right" width="50%">{ShippingCharge !== 0 ? <p>₹ {ShippingCharge}</p> : <p>Free Shipping</p>}</td> */}
                        </tr>
                    </tbody>
                </table>

                <table className="checkout_tabels">
                    <tbody>
                        <tr>
                            <td width="50%"><b>Total</b></td>
                            <td className="text-right" width="50%"><b>₹{TotalAmountWithShipping}</b></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    );
};

export default OrderSummary;