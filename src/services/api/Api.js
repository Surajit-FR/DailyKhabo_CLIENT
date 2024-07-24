import axios from "axios";
import { REACT_APP_BASE_URL } from "../../config/App.config";
// import toast from "react-hot-toast";

export const API = axios.create({ baseURL: REACT_APP_BASE_URL });

// API.interceptors.response.use(
//     (response) => new Promise((resolve, reject) => resolve(response)),
//     (error) => new Promise((resolve, reject) => {
//         if (error.response.status === 429 && error.response.statusText === 'Too Many Requests') {
//             toast.error(error.response.data, {
//                 duration: 4000,
//                 style: {
//                     background: "#000",
//                     color: "#fff"
//                 },
//                 iconTheme: {
//                     primary: "#f00",
//                     secondary: "#fff"
//                 }
//             });
//         } else {
//             new Promise((resolve, reject) => reject(error));
//         };
//     })
// );

// Login
export const LOGIN = (data) => API.post("/api/login", data);
// Register
export const REGISTER = (data) => API.post("/api/register", data);
// Verify Email
export const VERIFYEMAIL = (data) => API.post("/api/verify/email", data);
// Reset Password
export const RESETPASSWORD = (data) => API.post("/api/reset/password", data);
// Get all categories
export const GETALLCATEGORIES = (page, pageSize) => API.get(`/user/api/get/all/category?page=${page}&pageSize=${pageSize}`);
// Get all products
export const GETALLPRODUCTS = (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    return API.get(`/user/api/get/all/product?${queryParams}`);
};
// Get product details
export const GETPRODUCTDETAILS = (product_id) => API.get(`/user/api/get/product/details/${product_id}`);
// Add cart
export const ADDCART = (data, header) => API.post('/user/api/add/cart', data, header);
// Update cart
export const UPDATEQUANTITY = (data, header) => API.post('/user/api/update/cart/quantity', data, header);
// Get cart data
export const GETCARTDATA = (header) => API.get('/user/api/get/all/cart/data', header);
// Delete cart item
export const DELETECARTITEM = (product_id, header) => API.delete(`/user/api/delete/cart/item/${product_id}`, header);
// Apply coupon
export const APPLYCOUPON = (data, header) => API.post('/user/api/apply/coupon', data, header);
// Take order
export const TAKEORDER = (data, header) => API.post('/user/api/take/order', data, header);
// Create review
export const CREATEREVIEW = (data, header) => API.post('/user/api/create/review', data, header);
// Get all reviews
export const GETALLREVIEWS = (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    return API.get(`/user/api/get/all/reviews?${queryParams}`);
};
// Contact us
export const CONTACTUS = (data) => API.post('/user/api/contact/us', data);
// Get user details
export const GETUSERDETAILS = (header) => API.get('/user/api/get/user/details', header);