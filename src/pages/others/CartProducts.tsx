import { useEffect, useState } from "react";
import PageTopSection from "../../components/common/PageTopSection";
import Products from "../../components/core/cart/Products";
import { CartItemType, CustomHeadersType } from "../../config/DataTypes.config";
import { useSelector } from "react-redux";

type CartProducts_props = {
    _TOKEN: any,
    header: CustomHeadersType | undefined
}

const CartProducts = ({ _TOKEN, header }: CartProducts_props): JSX.Element => {
    const { cart_data } = useSelector((state: any) => state.cartSlice);

    const [cartData, setCartData] = useState<CartItemType[]>([]);
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
            <PageTopSection pageName="Products" />

            {/* Cart Products */}
            <Products
                cartData={cartData}
                SubTotalAmount={SubTotalAmount}
                DiscountAmount={DiscountAmount}
                ShippingCharge={ShippingCharge}
                TotalAmountWithShipping={TotalAmountWithShipping}
                header={header}
            />
        </>
    );
};

export default CartProducts;