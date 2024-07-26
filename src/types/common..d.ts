import { Role } from './auth';
import { JwtPayload } from "jwt-decode";
import { ReactNode } from "react";

// Custom headers type
export interface CustomHeaders {
    headers: {
        Authorization: string;
    };
}

// Form input event type
export interface SyntheticBaseEvent {
    target: {
        value: string;
        name: string;
    };
}

// Custom alert props type
export interface CustomAlertProps {
    type: 'success' | 'danger' | 'warning' | 'info' | 'dark';
    message: string;
    onClose: () => void;
}

// Pagination type
export interface IPagination {
    pageCount: number;
    pageNumber: number;
    changePage: (data: { selected: number }) => void;
}

// Search props type
export interface SearchProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Common response type
export interface ApiResponse<T> {
    _id: string;
    category: string;
    productImages: Array<string>;
    categoryImage: string;
    productTitle: ReactNode;
    price: (price: any) => unknown;
    category_name: ReactNode;
    token: (token: any) => string;
    message: string;
    success: boolean;
    data: T;
    totalAmount: number;
}

// Custom JWT payload type
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