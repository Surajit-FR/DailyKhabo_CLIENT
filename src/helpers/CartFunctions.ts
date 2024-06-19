import { addCart, applyCouponCode, deleteCartItem, updateQuantity } from "../services/slices/CartSlice";
import { CustomHeadersType } from "../config/DataTypes.config";
import { Dispatch } from "redux";

interface AddToCartParams {
    product: string | undefined;
    cart_quantity: number | undefined;
    header: CustomHeadersType | undefined;
    dispatch: Dispatch<any>
};

interface DleteCartItemParams {
    product_id: string | undefined;
    header: CustomHeadersType | undefined;
    dispatch: Dispatch<any>
};

interface ApplyCouponParams {
    couponCode: string | undefined;
    header: CustomHeadersType | undefined;
    dispatch: Dispatch<any>
};

export const addToCart = ({ product, cart_quantity, dispatch, header }: AddToCartParams): void => {
    const data = {
        product: product,
        cart_quantity: cart_quantity
    };
    dispatch(addCart({ data, header }));
};

export const updateItemQuantity = ({ product, cart_quantity, dispatch, header }: AddToCartParams): void => {
    const data = {
        product: product,
        cart_quantity: cart_quantity
    };
    dispatch(updateQuantity({ data, header }));
};

export const deleteItem = ({ product_id, dispatch, header }: DleteCartItemParams): void => {
    dispatch(deleteCartItem({ product_id, header }));
};

export const applyCoupon = ({ couponCode, dispatch, header }: ApplyCouponParams): void => {
    if (couponCode) {
        const data = { couponCode };
        dispatch(applyCouponCode({ data, header }));
    };
};