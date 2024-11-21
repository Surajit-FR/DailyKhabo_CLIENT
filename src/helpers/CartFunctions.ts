import { addCart, applyCouponCode, deleteCartItem, updateQuantity } from "../services/slices/CartSlice";
import { Dispatch } from "redux";
import { CustomHeaders } from "../types/common.";
import { SHIPPING_CHARGES } from "../config/App.config";

interface AddToCartParams {
    product: string | undefined | any;
    cart_quantity: number;
    header?: CustomHeaders | undefined;
    dispatch: Dispatch<any>
};

interface DleteCartItemParams {
    product_id: string | undefined;
    dispatch: Dispatch<any>
    header?: CustomHeaders | undefined;
};

interface ApplyCouponParams {
    couponCode: string | undefined;
    header: CustomHeaders | undefined;
    dispatch: Dispatch<any>
};

// Function to calculate totalAmountWithShipping
export const calculateTotalAmountWithShipping = (cart: any[]) => {
    let totalPrice = 0;
    cart.forEach((item: any) => {
        totalPrice += item.product.totalPrice;
    });

    const shippingCharge = totalPrice < 2500 ? SHIPPING_CHARGES : 0;
    return {
        totalPrice,
        shippingCharge,
        totalAmountWithShipping: totalPrice + shippingCharge
    };
};

// addToCart helper function
export const addToCart = ({ product, cart_quantity, dispatch, header }: AddToCartParams): void => {
    if (header) {
        const data = {
            product: product,
            cart_quantity: cart_quantity,
        };
        dispatch(addCart({ data, header }));
    } else {
        // Main logic to add/update items in the cart
        let cart = JSON.parse(localStorage.getItem('CartDataInfo') || '[]');
        const existingItemIndex = cart.findIndex((item: any) => item.product._id === product._id);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].cart_quantity += cart_quantity;

            if (cart[existingItemIndex].cart_quantity > product.productQuantity) {
                cart[existingItemIndex].cart_quantity = product.productQuantity;
            }

            cart[existingItemIndex].product.quantity = cart[existingItemIndex].cart_quantity;
            cart[existingItemIndex].product.totalPrice = cart[existingItemIndex].cart_quantity * product.finalPrice;
        } else {
            const newItem = {
                _id: Math.random().toString(36).substr(2, 9),
                product: {
                    _id: product._id,
                    productTitle: product.productTitle,
                    productImages: product.productImages,
                    finalPrice: product.finalPrice,
                    quantity: cart_quantity,
                    totalPrice: product.finalPrice * cart_quantity,
                },
                cart_quantity: cart_quantity,
            };
            cart.push(newItem);
        }

        localStorage.setItem('CartDataInfo', JSON.stringify(cart));
        window.location.reload();
    }
};

// updateItemQuantity helper function
export const updateItemQuantity = ({ product, cart_quantity, dispatch, header }: AddToCartParams): void => {
    if (header) {
        const data = {
            product: product,
            cart_quantity: cart_quantity
        };
        dispatch(updateQuantity({ data, header }));
    } else {
        let cart = JSON.parse(localStorage.getItem('CartDataInfo') || '[]');
        const existingItemIndex = cart.findIndex((item: any) => item.product._id === product);

        if (existingItemIndex > -1) {
            const productInCart = cart[existingItemIndex];
            productInCart.cart_quantity = cart_quantity;

            if (productInCart.cart_quantity > productInCart.product.productQuantity) {
                productInCart.cart_quantity = productInCart.product.productQuantity;
            }

            productInCart.product.quantity = productInCart.cart_quantity;
            productInCart.product.totalPrice = productInCart.cart_quantity * productInCart.product.finalPrice;
        } else {
            console.log('Product not found in the cart');
        }

        localStorage.setItem('CartDataInfo', JSON.stringify(cart));
        window.location.reload();
    }
};

// deleteItem helper function
export const deleteItem = ({ product_id, dispatch, header }: DleteCartItemParams): void => {
    if (header) {
        dispatch(deleteCartItem({ product_id, header }));
    } else {
        let cart = JSON.parse(localStorage.getItem('CartDataInfo') || '[]');

        // Find the index of the product to delete
        const existingItemIndex = cart.findIndex((item: any) => item.product._id === product_id);

        if (existingItemIndex > -1) {
            cart.splice(existingItemIndex, 1);

            localStorage.setItem('CartDataInfo', JSON.stringify(cart));
            calculateTotalAmountWithShipping(cart);
            window.location.reload();
        } else {
            console.log('Item not found in cart');
        }
    }
};

export const applyCoupon = ({ couponCode, dispatch, header }: ApplyCouponParams): void => {
    if (couponCode) {
        const data = { couponCode };
        dispatch(applyCouponCode({ data, header }));
    };
};