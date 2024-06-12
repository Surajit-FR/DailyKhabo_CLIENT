import PageTopSection from "../../components/common/PageTopSection";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItemType, CustomHeadersType } from "../../config/DataTypes.config";
import OrderSummary from "../../components/core/checkout/OrderSummary";
import BillingInfo from "../../components/core/checkout/BillingInfo";

type Checkout_props = {
    header: CustomHeadersType | undefined
}

const Checkout = ({ header }: Checkout_props): JSX.Element => {
    const { cart_data } = useSelector((state: any) => state.cartSlice);

    const [cartData, setCartData] = useState<CartItemType[]>([]);
    const TotalAmount = cart_data?.totalAmount;

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
                                cartData={cartData}
                                TotalAmount={TotalAmount}
                                header={header}
                            />

                            {/* Order summary */}
                            <OrderSummary
                                cartData={cartData}
                                TotalAmount={TotalAmount}
                                header={header}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Checkout;