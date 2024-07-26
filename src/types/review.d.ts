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
}
