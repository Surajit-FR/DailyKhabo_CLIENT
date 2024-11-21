import { useEffect, useMemo, useState } from "react";
import PageTopSection from "../../components/common/PageTopSection";
import Products from "../../components/core/cart/Products";
import { useSelector } from "react-redux";
import { CustomHeaders } from "../../types/common.";
import { CartItem } from "../../types/cart";
import { calculateTotalAmountWithShipping } from "../../helpers/CartFunctions";

type CartProducts_props = {
    _TOKEN: any,
    header: CustomHeaders | undefined
}

const CartProducts = ({ _TOKEN, header }: CartProducts_props): JSX.Element => {
    const { cart_data } = useSelector((state: any) => state.cartSlice);
    const localStorageCartData = useMemo(() => JSON.parse(localStorage.getItem('CartDataInfo') || '[]'), []);

    const [cartData, setCartData] = useState<CartItem[]>([]);
    const [guestCartData, setGuestCartData] = useState<CartItem[]>([]);
    const SubTotalAmount = cart_data?.subTotalAmount;
    const DiscountAmount = cart_data?.discountAmount;
    const ShippingCharge = cart_data?.shippingCharge;
    const TotalAmountWithShipping = cart_data?.totalAmountWithShipping;
    const totalPaybleAmount = calculateTotalAmountWithShipping(guestCartData);

    useEffect(() => {
        if (!_TOKEN) {
            setGuestCartData(localStorageCartData);
        }
    }, [localStorageCartData, _TOKEN]);

    useEffect(() => {
        setCartData(cart_data?.data);
    }, [cart_data]);


    return (
        <>
            {/* PageHeader Section */}
            <PageTopSection pageName="Products" />

            {/* Cart Products */}
            <Products
                cartData={cartData || guestCartData}
                SubTotalAmount={SubTotalAmount || totalPaybleAmount?.totalPrice}
                DiscountAmount={DiscountAmount}
                ShippingCharge={ShippingCharge || totalPaybleAmount?.shippingCharge}
                TotalAmountWithShipping={TotalAmountWithShipping || totalPaybleAmount?.totalAmountWithShipping}
                header={header}
                _TOKEN={_TOKEN}
            />
        </>
    );
};

export default CartProducts;