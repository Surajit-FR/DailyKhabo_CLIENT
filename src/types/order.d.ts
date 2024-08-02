export interface OrderItem {
    _id: string;
    user: string;
    customer: {
        email: string;
        full_name: string;
        phone: string;
        address: string;
        apartment: string;
        country: string;
        state: string;
        city: string;
        postalCode: string;
    };
    items: {
        cart: string;
        product: string;
        quantity: number;
        _id: string;
    }[];
    shipping: {
        type: string;
        cost: number;
    };
    payment: string;
    status: string;
    subtotal: number;
    discount: number;
    total: number;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    orderId: string;
}
