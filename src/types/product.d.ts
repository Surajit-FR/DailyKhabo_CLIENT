import { Category } from './category';
import { ApiResponse } from './common.';
import { Review } from './review';

// Product list type
export interface IProduct {
    _id: string;
    productTitle: string;
    offer: string;
    offerPercentage: string;
    is_discount_code: string;
    discountCode: string;
    productImages: Array<string>;
    productDescription: string;
    productKeyPoints: Array<string>;
    price: string;
    finalPrice: number;
    availability: string;
    productQuantity: number;
    categories: Array<Category>;
    review: Array<Review>;
    is_delete: boolean;
    createdAt: string;
    updatedAt: string;
    __v: string;
}

// Promise return type for fetching products
export interface FetchAllProductResponse {
    data: Array<Product>;
    totalPages: number;
    currentPage: number;
    totalItems: number;
    showing: {
        startIndex: number;
        endIndex: number;
    };
    message: string;
    success: boolean;
}

// Common response type for product operations
export type ProductResponse = ApiResponse<Array<Product>>;
