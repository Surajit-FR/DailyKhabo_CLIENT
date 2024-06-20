import { JwtPayload } from "jwt-decode";
import { ReactNode } from "react";

// Header type
export type CustomHeadersType = {
    headers: {
        Authorization: string
    }
}

// Form input type
export type formValuesType = {
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
        email?: string,
        full_name?: string,
        phone?: string,
        address?: string,
        apartment?: string,
        country?: string,
        state?: string,
        city?: string,
        postalCode?: string,
    };
    items?: Array<{
        cart: string,
        product: string,
        quantity: number,
    }>;
    shipping?: {
        type: string,
        cost: number,
    };
    payment?: string,
    total?: number,
    email?: string,
    product_id?: string,
    full_name?: string,
    rating?: number | null | undefined,
    message?: string,
};

// Form value props type
export type FormValues_Props = {
    data?: formValuesType | FormData | undefined;
    header?: CustomHeadersType | undefined;
    page?: number | undefined;
    pageSize?: number | undefined;
    search?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    navigate?: any;
    category_id?: string | undefined;
    product_id?: string | undefined;
    product?: string | undefined;
    cart_quantity?: number | undefined;
    couponCode?: string | undefined;
    resetForm?: Function;
    setRating?: Function;
};

// Signin input type
export type authInInputValues = {
    full_name?: string;
    email?: string;
    credential?: string;
    password?: string;
    conf_password?: string;
    remember_me?: boolean;
};

// Form input Event type
export type SyntheticBaseEvent = {
    target: {
        value: string;
        name: string;
    };
};

// User auth props type
export type UserAuth_Props = {
    data: authInInputValues;
    navigate?: any;
    resetForm?: Function;
};

// Define the type for a single permission
export type Permission = {
    name: string;
};

// Define the type for the role, which includes an array of permissions
export type Role = {
    name: string;
    permissions: Permission[];
};

// PermissionCheckResult type
export type PermissionCheckResult = {
    [key: string]: boolean;
};

// UserData type
export type UserData = {
    _id: string;
    full_name: string;
    email: string;
    password: string;
    role: Role;
    is_active: boolean;
    is_delete: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    web_theme: string;
    remember_me: boolean;
}

// Define the type for the login success response
type LoginSuccessResponse = {
    data: UserData;
    message: string;
    success: boolean;
    token: string;
};

// CustomAlertProps
export type CustomAlertProps = {
    type: 'success' | 'danger' | 'warning' | 'info' | 'dark';
    message: string;
    onClose: () => void;
}

// User drop down links type
export type dropdownItemsType = {
    icon: string;
    text: string;
    link: string;
};

// Define the pagination type
export type Pagination_Type = {
    pageCount: number;
    pageNumber: number;
    changePage: (data: { selected: number }) => void;
};

// Category list type
export type CategoryListType = {
    _id: string;
    categoryID: string;
    category_name: string;
    categoryImage: string;
    category_desc: string;
    is_delete: boolean,
    createdAt: string;
    updatedAt: string;
    __v: string;
};

// Cart product type
type CartProduct = {
    _id: string;
    productTitle: string;
    productImages: Array<string>;
    price: number;
    finalPrice: number;
    quantity: number;
    totalPrice: number;
}

// Cart list type
export type CartItemType = {
    _id: string;
    product: CartProduct;
    cart_quantity: number;
    createdAt: string;
    updatedAt: string;
}

// Review list type
export type ReviewListType = {
    _id: string;
    product: string;
    full_name: string;
    email: string;
    rating: number;
    message: string;
    is_delete: boolean;
    createdAt: string;
    updatedAt: string;
}

// Promise return type FetchAllCategoryResponse
export type FetchCartResponse = {
    data: Array<CartItemType>;
    totalAmount: number;
    message: string;
    success: boolean;
};

// Promise return type FetchAllCategoryResponse
export type FetchAllCategoryResponse = {
    data: [CategoryListType];
    message: string;
    success: boolean;
};

// Product list type
export type ProductListType = {
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
    categories: Array<CategoryListType>;
    is_delete: boolean,
    createdAt: string;
    updatedAt: string;
    __v: string;
};

// Promise return type FetchAllProductResponse
export type FetchAllProductResponse = {
    data: [ProductListType];
    totalPages: number;
    currentPage: number;
    totalItems: number;
    showing: {
        startIndex: number;
        endIndex: number;
    };
    message: string;
    success: boolean;
};

// Search_props_type
export type Search_props_type = {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// Common response type
export interface ApiResponse<T> {
    _id: string;
    category: string;
    productImages: Array<string>;
    categoryImage: string;
    productTitle: ReactNode;
    price(price: any): unknown;
    category_name: ReactNode;
    token(token: any): string;
    message: string;
    success: boolean;
    data: T;
    totalAmount: number;
}

// CustomJwtPayload type
export interface CustomJwtPayload extends JwtPayload {
    _id?: string;
    full_name?: string;
    email?: string;
    password?: string;
    web_theme?: string;
    role?: Role;
    is_active?: boolean;
    is_delete?: boolean;
    remember_me?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

// Common response type for category operations
export type CategoryResponse = ApiResponse<Array<CategoryListType>>;

// Common response type for product operations
export type ProductResponse = ApiResponse<Array<ProductListType>>;

// Common response type for cart operations
export type CartResponse = ApiResponse<Array<CartItemType>>;

// Common response type for authentication
export type AuthResponse = ApiResponse<LoginSuccessResponse['data']>;