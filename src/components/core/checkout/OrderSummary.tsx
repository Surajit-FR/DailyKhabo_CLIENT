import { CartItemType, CustomHeadersType } from "../../../config/DataTypes.config";
import { getImagUrl } from "../../../helpers/getImage";

type OrderSummary_props = {
    cartData: Array<CartItemType>;
    TotalAmount: number;
    header: CustomHeadersType | undefined
}

const OrderSummary = ({ cartData, TotalAmount, header }: OrderSummary_props): JSX.Element => {
    return (
        <>
            <div className="col-lg-5">
                <h4 className="summary1">Order summary</h4>
                <table className="checkout_tabels">
                    <tbody>
                        {
                            cartData && cartData?.map((item, index) => {
                                return (
                                    <tr>
                                        <td width="15%">
                                            <img src={getImagUrl(item?.product?.productImages[0])} alt="product" height={30} width={45} />
                                        </td>
                                        <td width="60%">{item?.product?.productTitle}</td>
                                        <td width="10%">{item?.cart_quantity}</td>
                                        <td width="15%">₹{item?.product?.totalPrice}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <table className="checkout_tabels">
                    <tbody>
                        <tr>
                            <td width="50%">
                                Subtotal
                            </td>
                            <td className="text-right" width="50%">
                                <b>₹{TotalAmount}</b>
                            </td>
                        </tr>
                        <tr>
                            <td width="50%">
                                Shipping and Handling
                            </td>
                            <td className="text-right" width="50%">
                                <p>Free Shipping</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="checkout_tabels">
                    <tbody>
                        <tr>
                            <td width="50%">
                                <b>Total</b>
                            </td>
                            <td className="text-right" width="50%">
                                <b>₹{TotalAmount}</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default OrderSummary;