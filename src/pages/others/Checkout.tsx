import PageTopSection from "../../components/common/PageTopSection";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItemType, CustomHeadersType } from "../../config/DataTypes.config";
import OrderSummary from "../../components/core/checkout/OrderSummary";
import BillingInfo from "../../components/core/checkout/BillingInfo";
import { useLocation } from "react-router-dom";

type Checkout_props = {
    header: CustomHeadersType | undefined
}

const Checkout = ({ header }: Checkout_props): JSX.Element => {
    const { cart_data } = useSelector((state: any) => state.cartSlice);
    const location = useLocation();
    const { state } = location;

    const [cartData, setCartData] = useState<CartItemType[]>([]);
    const [coupon_code, setCoupon_Code] = useState<string>(state?.key || '');
    const SubTotalAmount = cart_data?.subTotalAmount;
    const DiscountAmount = cart_data?.discountAmount;
    const ShippingCharge = cart_data?.shippingCharge;
    const TotalAmountWithShipping = cart_data?.totalAmountWithShipping;

    useEffect(() => {
        setCartData(cart_data?.data);
    }, [cart_data]);

    return (
        <>
            {/* PageHeader Section */}
            <PageTopSection pageName="Checkout" />

            <div className="checkout_box">
                <div className="container">
                    <form className="checkout_bg">
                        <div className="row">

                            {/* Billing Info. */}
                            <BillingInfo
                                header={header}
                                cartData={cartData}
                                SubTotalAmount={SubTotalAmount}
                                DiscountAmount={DiscountAmount}
                                ShippingCharge={ShippingCharge}
                                TotalAmountWithShipping={TotalAmountWithShipping}
                                couponCode={coupon_code}
                            />

                            {/* Order summary */}
                            <OrderSummary
                                cartData={cartData}
                                couponCode={coupon_code}
                                setCouponCode={setCoupon_Code}
                                header={header}
                                SubTotalAmount={SubTotalAmount}
                                DiscountAmount={DiscountAmount}
                                ShippingCharge={ShippingCharge}
                                TotalAmountWithShipping={TotalAmountWithShipping}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Checkout;