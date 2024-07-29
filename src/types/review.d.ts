// Review list type
export interface Review {
    _id: string;
    product: string;
    full_name: string;
    email: string;
    rating: number;
    message: string;
    is_delete: boolean;
    createdAt: string;
    updatedAt: string;
};

export interface UserMessage {
    _id: string;
    full_name: string;
    email: string;
    phone: string;
    designation: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    is_highlighted: boolean;
}
