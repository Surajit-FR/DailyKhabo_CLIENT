import * as Yup from 'yup';

// login validation
export const loginValidationSchema = Yup.object({
    credential: Yup.string().email('Invalid email address').required('Email ID is required'),
    password: Yup.string().required('Password is required'),
    user_type: Yup.string().required('User Type is required'),
});

// register validation
export const registerValidationSchema = Yup.object({
    full_name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email ID is required'),
    password: Yup.string()
        .min(8, 'Password should be minimum 8 characters long')
        .max(16, 'Password should be maximum 16 characters long')
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])([a-zA-Z0-9@#$%^&*+=._-]){8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number & one special character'
        )
        .required('Password is required'),
    conf_password: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm Password is required'),
    role: Yup.string(),
});

// email validation
export const emailValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email ID is required'),
});

// forget password validation
export const passwordValidationSchema = Yup.object({
    password: Yup.string()
        .min(8, 'Password should be minimum 8 characters long')
        .max(16, 'Password should be maximum 16 characters long')
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])([a-zA-Z0-9@#$%^&*+=._-]){8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number & one special character'
        )
        .required('Password is required'),
    conf_password: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm Password is required'),
});

// order validation
export const orderValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email ID is required'),
    full_name: Yup.string().required('Full name is required'),
    phone: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.string().required('Postal code is required'),
    payment: Yup.string().oneOf(['cod', 'stripe']).required('Payment method is required'),
});

// rating validation
export const ratingValidationSchema = Yup.object({
    full_name: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email ID is required'),
    // rating: Yup.string().required('Rating is required'),
    message: Yup.string().required('Message & Rating is required'),
});

// order validation
export const contactUsValidationSchema = Yup.object({
    full_name: Yup.string().required('Full name is required'),
    designation: Yup.string(),
    email: Yup.string().email('Invalid email address').required('Email ID is required'),
    phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be exactly 10 digits').notRequired(),
    message: Yup.string().required('One message is required'),
});

// add address validation
export const addAddressValidationSchema = Yup.object({
    address: Yup.string().required('Address is required'),
    apartment: Yup.string(),
    phone: Yup.string()
        .matches(/^[0-9]+$/, 'Phone must be a number')
        .max(10, 'Phone number cannot be more than 10 digits')
        .required('Phone is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.string()
        .matches(/^[0-9]+$/, 'Postal code must be a number')
        .max(6, 'Postal code cannot be more than 6 digits')
        .required('Postal Code is required'),
});