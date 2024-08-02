// types/formValues.d.ts

import { IAddress } from "./address";

export interface FormValues {
    category_name?: string;
    categoryImage?: string;
    category_desc?: string;
    productTitle?: string;
    offer?: string;
    offerPercentage?: string;
    productImage?: string | null;
    productDescription?: string;
    price?: string;
    availability?: string;
    visibility?: string;
    categories?: string;
    web_theme?: string;
    product?: string | undefined;
    cart_quantity?: number | undefined;
    couponCode?: string | undefined;
    customer?: {
        email?: string;
        full_name?: string;
        phone?: string;
        address?: string;
        apartment?: string;
        country?: string;
        state?: string;
        city?: string;
        postalCode?: string;
    };
    items?: Array<{
        cart: string;
        product: string;
        quantity: number;
    }>;
    shipping?: {
        type: string;
        cost: number;
    };
    payment?: string;
    subtotal?: number;
    discount?: number;
    total?: number;
    email?: string;
    product_id?: string;
    full_name?: string;
    rating?: number | null | undefined;
    message?: string;
}

export interface FormValuesProps {
    data?: FormValues | FormData | undefined | IAddress;
    header?: CustomHeaders | undefined;
    page?: number | undefined;
    pageSize?: number | undefined;
    searchQuery?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    navigate?: any;
    order_id?: string | undefined;
    category_id?: string | undefined;
    product_id?: string | undefined;
    address_id?: string | undefined;
    product?: string | undefined;
    cart_quantity?: number | undefined;
    couponCode?: string | undefined;
    resetForm?: () => void;
    setRating?: (rating: number) => void;
}

export interface IFormValues {
    phone: string;
    address: string;
    apartment: string;
    country: string;
    state: string;
    city: string;
    postalCode: string;
    primary: boolean;
}