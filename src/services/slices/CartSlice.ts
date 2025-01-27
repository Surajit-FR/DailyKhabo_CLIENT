import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ADDCART, APPLYCOUPON, DELETECARTITEM, GETCARTDATA, SYNCCART, TAKEORDER, UPDATEQUANTITY } from "../api/Api";
import { showToast } from "../../helpers/Toast";
import { FetchCartResponse } from "../../types/cart";
import { FormValuesProps } from "../../types/formValues";


// addCart thunk
export const addCart = createAsyncThunk("/user/api/add/cart", async ({ data, header }: FormValuesProps, { rejectWithValue, dispatch }): Promise<any> => {
    try {
        const response = await ADDCART(data, header);
        const result: any = response?.data;
        if (result?.success) {
            // showToast({ message: result?.message || 'Product added to the cart!', type: 'success', durationTime: 3500, position: "top-center" });
            dispatch(getAllCartData({ header }));
            return result;
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        // showToast({ message: err?.payload?.message || 'Failed to add product.', type: 'error', durationTime: 3500, position: "top-center" });
        return err;
    }
});

// updateQuantity thunk
export const updateQuantity = createAsyncThunk("/user/api/update/cart/quantity", async ({ data, header }: FormValuesProps, { rejectWithValue, dispatch }): Promise<any> => {
    try {
        const response = await UPDATEQUANTITY(data, header);
        const result: any = response?.data;
        if (result?.success) {
            // showToast({ message: result?.message || 'Cart quantity updated!', type: 'success', durationTime: 3000, position: "top-center" });
            dispatch(getAllCartData({ header }));
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        // showToast({ message: err?.payload?.message || 'Failed to add product.', type: 'error', durationTime: 3000, position: "top-center" });
        return err;
    }
});

// syncCart thunk
export const syncCart = createAsyncThunk("/user/api/sync/cart", async ({ data, header }: FormValuesProps, { rejectWithValue, dispatch }): Promise<any> => {
    try {
        const response = await SYNCCART(data, header);
        const result: any = response?.data;
        if (result?.success) {
            dispatch(getAllCartData({ header }));
            localStorage.removeItem('CartDataInfo')
            return result;
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

// getAllCartData thunk
export const getAllCartData = createAsyncThunk("/user/api/get/all/cart/data", async ({ header }: FormValuesProps, { rejectWithValue }): Promise<FetchCartResponse | any> => {
    try {
        const response = await GETCARTDATA(header);
        const result: FetchCartResponse = response?.data;
        if (result?.success) return result;
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

// deleteCartItem thunk
export const deleteCartItem = createAsyncThunk("/user/api/delete/cart/item/", async ({ product_id, couponCode, header }: FormValuesProps, { rejectWithValue, dispatch }): Promise<any> => {
    try {
        const response = await DELETECARTITEM(product_id, header);
        const result: any = response?.data;
        if (result?.success) {
            showToast({ message: result?.message || 'Product removed to the cart!', type: 'success', durationTime: 3500, position: "top-center" });
            dispatch(getAllCartData({ couponCode, header }));
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        // showToast({ message: err?.payload?.message || 'Failed to add product.', type: 'error', durationTime: 3500, position: "top-center" });
        return err;
    }
});

// applyCoupon thunk
export const applyCouponCode = createAsyncThunk("/user/api/apply/coupon", async ({ data, header }: FormValuesProps, { rejectWithValue }): Promise<any> => {
    try {
        const response = await APPLYCOUPON(data, header);
        const result: any = response?.data;
        if (result?.success) {
            showToast({ message: result?.message || 'Coupon applied!', type: 'success', durationTime: 3500, position: "top-center" });
            return result;
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        // showToast({ message: err?.payload?.message || 'Failed to apply.', type: 'error', durationTime: 3500, position: "top-center" });
        return err;
    }
});

// placeOrder thunk
export const placeOrder = createAsyncThunk("/user/api/take/order", async ({ data, resetForm, navigate, header }: FormValuesProps, { rejectWithValue, dispatch }): Promise<any> => {
    try {
        const response = await TAKEORDER(data, header);
        const result: any = response?.data;
        if (result?.success) {
            showToast({ message: result?.message || 'Order placed.', type: 'success', durationTime: 3500, position: "top-center" });
            resetForm && resetForm();
            dispatch(getAllCartData({ header }));
            navigate('/thank-you')
            return result;
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        // showToast({ message: err?.payload?.message || 'Failed to place order.', type: 'error', durationTime: 3500, position: "top-center" });
        return err;
    }
});


const CartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        // cart States
        add_cart_data: [],
        cart_data: [],

        // order States
        placeOrder_resp: null,

        // Common States
        cart_loading: false,
        error: null,
    },
    reducers: {
        clearError(state) {
            state.error = null;
        },
    },
    extraReducers: builder => {
        // addCart states
        builder.addCase(addCart.pending, (state) => {
            state.cart_loading = true;
        })
        builder.addCase(addCart.fulfilled, (state, { payload }) => {
            state.cart_loading = false;
            const add_cart_data: any = payload;
            state.add_cart_data = add_cart_data;
        })
        builder.addCase(addCart.rejected, (state, { payload }) => {
            state.cart_loading = false;
            const err: any | null = payload;
            state.error = err;
        })

        // getAllCartData states
        builder.addCase(getAllCartData.pending, (state) => {
            state.cart_loading = true;
        })
        builder.addCase(getAllCartData.fulfilled, (state, { payload }) => {
            state.cart_loading = false;
            const cart_data: any = payload;
            state.cart_data = cart_data;
        })
        builder.addCase(getAllCartData.rejected, (state, { payload }) => {
            state.cart_loading = false;
            const err: any | null = payload;
            state.error = err;
        })

        // applyCouponCode states
        builder.addCase(applyCouponCode.pending, (state) => {
            state.cart_loading = true;
        })
        builder.addCase(applyCouponCode.fulfilled, (state, { payload }) => {
            state.cart_loading = false;
            const cart_data: any = payload;
            state.cart_data = cart_data;
        })
        builder.addCase(applyCouponCode.rejected, (state, { payload }) => {
            state.cart_loading = false;
            const err: any | null = payload;
            state.error = err;
        })

        // placeOrder states
        builder.addCase(placeOrder.pending, (state) => {
            state.cart_loading = true;
        })
        builder.addCase(placeOrder.fulfilled, (state, { payload }) => {
            state.cart_loading = false;
            const placeOrder_resp: any = payload;
            state.placeOrder_resp = placeOrder_resp;
        })
        builder.addCase(placeOrder.rejected, (state, { payload }) => {
            state.cart_loading = false;
            const err: any | null = payload;
            state.error = err;
        })
    }
})


export const {
    clearError,
} = CartSlice.actions;
export default CartSlice.reducer;