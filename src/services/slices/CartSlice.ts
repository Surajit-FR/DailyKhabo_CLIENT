import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ADDCART, GETCARTDATA } from "../api/Api";
import { FetchCartResponse, FormValues_Props } from "../../config/DataTypes.config";
import { showToast } from "../../helpers/Toast";

// addCart thunk
export const addCart = createAsyncThunk("/user/api/add/cart", async ({ data, header }: FormValues_Props, { rejectWithValue, dispatch }): Promise<any> => {
    try {
        const response = await ADDCART(data, header);
        const result: any = response?.data;
        if (result?.success) {
            showToast({ message: result?.message || 'Product added to the cart!', type: 'success', durationTime: 3500 });
            dispatch(getAllCartData({ header }));
            return result;
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        showToast({ message: err?.payload?.message || 'Failed to add product.', type: 'error', durationTime: 3500 });
        return err;
    }
});

// getAllCartData thunk
export const getAllCartData = createAsyncThunk("/user/api/get/all/cart/data", async ({ header }: FormValues_Props, { rejectWithValue }): Promise<FetchCartResponse | any> => {
    try {
        const response = await GETCARTDATA(header);
        const result: FetchCartResponse = response?.data;
        if (result?.success) return result;
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

const CartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        // cart States
        add_cart_data: [],
        cart_data: [],

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
    }
})


export const {
    clearError,
} = CartSlice.actions;
export default CartSlice.reducer;