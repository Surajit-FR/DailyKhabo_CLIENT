import { ApiResponse } from "./common.";

// Cart product type
export interface CartProduct {
    _id: string;
    productTitle: string;
    productImages: Array<string>;
    price: number;
    finalPrice: number;
    quantity: number;
    totalPrice: number;
}

// Cart list type
export interface CartItem {
    _id: string;
    product: CartProduct;
    cart_quantity: number;
    createdAt: string;
    updatedAt: string;
}

// Promise return type for fetching cart
export interface FetchCartResponse {
    data: Array<CartItem>;
    subTotalAmount: number;
    shippingCharge: number;
    discountAmount: number;
    totalAmountWithShipping: number;
    message: string;
    success: boolean;
}

// Common response type for cart operations
export type CartResponse = ApiResponse<Array<CartItem>>;
