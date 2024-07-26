// Address type
export interface Address {
    _id: string;
    user: string;
    address: string;
    phone: string;
    apartment: string;
    country: string;
    state: string;
    city: string;
    postalCode: string;
    primary: boolean;
}

export interface IAddress {
    address: string;
    apartment: string;
    phone: string;
    country: string;
    state: string;
    city: string;
    postalCode: string;
    primary: boolean;
}
