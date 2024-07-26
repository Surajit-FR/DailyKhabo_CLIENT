import { ApiResponse } from "./common.";

// Category list type
export interface Category {
    _id: string;
    categoryID: string;
    category_name: string;
    categoryImage: string;
    category_desc: string;
    is_delete: boolean;
    createdAt: string;
    updatedAt: string;
    __v: string;
}

// Promise return type for fetching categories
export interface FetchAllCategoryResponse {
    data: Array<Category>;
    message: string;
    success: boolean;
}

// Common response type for category operations
export type CategoryResponse = ApiResponse<Array<Category>>;
