import { useEffect, useState } from "react";
import PageTopSection from "../../components/common/PageTopSection";
import Products from "../../components/core/cart/Products";
import { CustomHeadersType } from "../../config/DataTypes.config";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartData } from "../../services/slices/CartSlice";

type CartProducts_props = {
    _TOKEN: any,
    header: CustomHeadersType
}

const CartProducts = ({ _TOKEN, header }: CartProducts_props): JSX.Element => {
    const { cart_data } = useSelector((state: any) => state.cartSlice);
    const dispatch: Dispatch<any> = useDispatch();

    const [cartData, setCartData] = useState([]);
    const TotalAmount = cart_data?.totalAmount;

    useEffect(() => {
        dispatch(getAllCartData(header));
    }, [dispatch, header]);

    useEffect(() => {
        setCartData(cart_data?.data);
    }, [cart_data]);

    console.log(cartData, TotalAmount);

    return (
        <>
            {/* PageHeader Section */}
            <PageTopSection pageName="Products" />

            {/* Cart Products */}
            <Products />
        </>
    );
};

export default CartProducts;