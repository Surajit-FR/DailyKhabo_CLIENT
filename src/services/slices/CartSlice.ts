import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GETCARTDATA } from "../api/Api";
import { CustomHeadersType, FetchCartResponse } from "../../config/DataTypes.config";


// getAllCartData thunk
export const getAllCartData = createAsyncThunk("/user/api/get/all/cart/data", async (header: CustomHeadersType, { rejectWithValue }): Promise<FetchCartResponse | any> => {
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