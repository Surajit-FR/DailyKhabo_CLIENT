import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CREATEREVIEW, GETALLCATEGORIES, GETALLPRODUCTS, GETALLREVIEWS, GETPRODUCTDETAILS } from "../api/Api";
import { FetchAllCategoryResponse, FetchAllProductResponse, FormValues_Props } from "../../config/DataTypes.config";
import { showToast } from "../../helpers/Toast";


// getAllCategory thunk
export const getAllCategory = createAsyncThunk("/user/api/get/all/category", async ({ page, pageSize }: FormValues_Props, { rejectWithValue }): Promise<FetchAllCategoryResponse | any> => {
    try {
        const response = await GETALLCATEGORIES(page, pageSize);
        const result: FetchAllCategoryResponse = response?.data;
        if (result?.success) return result;
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

// getAllProduct thunk
export const getAllProduct = createAsyncThunk("/user/api/get/all/product", async (params: FormValues_Props, { rejectWithValue }): Promise<FetchAllProductResponse | any> => {
    try {
        const { page, pageSize, searchQuery, category } = params;
        const response = await GETALLPRODUCTS({ page, pageSize, searchQuery, category });
        const result: FetchAllProductResponse = response?.data;
        if (result?.success) {
            return result
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

// getProductDetails thunk
export const getProductDetails = createAsyncThunk("/user/api/get/product/details", async ({ product_id }: FormValues_Props, { rejectWithValue }): Promise<FetchAllProductResponse | any> => {
    try {
        const response = await GETPRODUCTDETAILS(product_id);
        const result: FetchAllProductResponse = response?.data;
        if (result?.success) {
            return result
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

// getAllReviews thunk
export const getAllReviews = createAsyncThunk("/user/api/get/all/reviews/", async (params: FormValues_Props, { rejectWithValue }): Promise<any> => {
    try {
        const { product_id } = params;
        const response = await GETALLREVIEWS({ product_id });
        const result: any = response?.data;
        if (result?.success) {
            return result
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

// createReview thunk
export const createReview = createAsyncThunk("/user/api/create/review", async ({ data, product_id, resetForm, setRating, header }: FormValues_Props, { rejectWithValue, dispatch }): Promise<any> => {
    try {
        const response = await CREATEREVIEW(data, header);
        const result: any = response?.data;
        if (result?.success) {
            resetForm && resetForm();
            setRating && setRating(0);
            showToast({ message: result?.message || 'Product added to the cart!', type: 'success', durationTime: 3500, position: "top-center" });
            dispatch(getAllReviews({ product_id }));
            return result
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

const UtilitySlice = createSlice({
    name: "utilitySlice",
    initialState: {
        // Category States
        category_data: [],

        // Product States
        products_data: [],
        products_details_data: [],

        // Review States
        review_data: [],

        // Common States
        utility_loading: false,
        error: null,
    },
    reducers: {
        clearProductsDetailsData(state) {
            state.products_details_data = [];
        },
        clearProductsData(state) {
            state.products_data = [];
        },
        clearCategoryData(state) {
            state.category_data = [];
        },
        clearError(state) {
            state.error = null;
        },
    },
    extraReducers: builder => {
        // getAllCategory states
        builder.addCase(getAllCategory.pending, (state) => {
            state.utility_loading = true;
        })
        builder.addCase(getAllCategory.fulfilled, (state, { payload }) => {
            state.utility_loading = false;
            const category_data: any = payload;
            state.category_data = category_data;
        })
        builder.addCase(getAllCategory.rejected, (state, { payload }) => {
            state.utility_loading = false;
            const err: any | null = payload;
            state.error = err;
        })

        // getAllProduct states
        builder.addCase(getAllProduct.pending, (state) => {
            state.utility_loading = true;
        })
        builder.addCase(getAllProduct.fulfilled, (state, { payload }) => {
            state.utility_loading = false;
            const products_data: any = payload;
            state.products_data = products_data;
        })
        builder.addCase(getAllProduct.rejected, (state, { payload }) => {
            state.utility_loading = false;
            const err: any | null = payload;
            state.error = err;
        })

        // getProductDetails states
        builder.addCase(getProductDetails.pending, (state) => {
            state.utility_loading = true;
        })
        builder.addCase(getProductDetails.fulfilled, (state, { payload }) => {
            state.utility_loading = false;
            const products_details_data: any = payload;
            state.products_details_data = products_details_data;
        })
        builder.addCase(getProductDetails.rejected, (state, { payload }) => {
            state.utility_loading = false;
            const err: any | null = payload;
            state.error = err;
        })

        // getAllReviews states
        builder.addCase(getAllReviews.pending, (state) => {
            state.utility_loading = true;
        })
        builder.addCase(getAllReviews.fulfilled, (state, { payload }) => {
            state.utility_loading = false;
            const review_data: any = payload;
            state.review_data = review_data;
        })
        builder.addCase(getAllReviews.rejected, (state, { payload }) => {
            state.utility_loading = false;
            const err: any | null = payload;
            state.error = err;
        })
    }
})


export const {
    clearProductsDetailsData,
    clearProductsData,
    clearCategoryData,
    clearError,
} = UtilitySlice.actions;
export default UtilitySlice.reducer;