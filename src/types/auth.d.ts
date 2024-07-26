import { ApiResponse } from './common.';

// Define the type for a single permission
export interface Permission {
    name: string;
}

// Define the type for the role, which includes an array of permissions
export interface Role {
    name: string;
    permissions: Permission[];
}

// User data type
export interface UserData {
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

// Sign-in input type
export interface AuthInputValues {
    full_name?: string;
    email?: string;
    credential?: string;
    password?: string;
    conf_password?: string;
    remember_me?: boolean;
}

// User auth props type
export interface UserAuthProps {
    data: AuthInputValues;
    navigate?: any;
    resetForm?: Function;
}

// Define the type for the login success response
export interface LoginSuccessResponse {
    data: UserData;
    message: string;
    success: boolean;
    token: string;
}

// Common response type for authentication
export type AuthResponse = ApiResponse<LoginSuccessResponse['data']>;
