import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ADDADDRESS, DELETEADDRESS, GETADDRESS, GETUSERDETAILS, UPDATEADDRESS } from "../api/Api";
import { FormValues_Props } from "../../config/DataTypes.config";
import { showToast } from "../../helpers/Toast";

// addAddress thunk
export const addAddress = createAsyncThunk("/user/api/add/user/address", async ({ data, resetForm, header }: FormValues_Props, { rejectWithValue, dispatch }): Promise<any> => {
    try {
        const response = await ADDADDRESS(data, header);
        const result: any = response?.data;
        if (result?.success) {
            showToast({ message: result?.message || 'Address updated!', type: 'success', durationTime: 3500, position: "top-center" });
            dispatch(getUserDetails({ header }));
            resetForm && resetForm()
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        showToast({ message: err?.payload?.message || 'Failed to removed address.', type: 'error', durationTime: 3500, position: "top-center" });
        return err;
    }
});

// getUserDetails thunk
export const getUserDetails = createAsyncThunk("/user/api/get/user/details", async ({ header }: FormValues_Props, { rejectWithValue }): Promise<any> => {
    try {
        const response = await GETUSERDETAILS(header);
        const result: any = response?.data;
        if (result?.success) return result;
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

// getAddress thunk
export const getAddress = createAsyncThunk("/user/api/get/address/", async ({ address_id, header }: FormValues_Props, { rejectWithValue }): Promise<any> => {
    try {
        const response = await GETADDRESS(address_id, header);
        const result: any = response?.data;
        if (result?.success) {
            return result;
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        showToast({ message: err?.payload?.message || 'Failed to removed address.', type: 'error', durationTime: 3500, position: "top-center" });
        return err;
    }
});

// updateAddress thunk
export const updateAddress = createAsyncThunk("/user/api/update/user/address/", async ({ address_id, data, resetForm, header }: FormValues_Props, { rejectWithValue, dispatch }): Promise<any> => {
    try {
        const response = await UPDATEADDRESS(address_id, data, header);
        const result: any = response?.data;
        if (result?.success) {
            showToast({ message: result?.message || 'Address updated!', type: 'success', durationTime: 3500, position: "top-center" });
            dispatch(getUserDetails({ header }));
            resetForm && resetForm()
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        showToast({ message: err?.payload?.message || 'Failed to removed address.', type: 'error', durationTime: 3500, position: "top-center" });
        return err;
    }
});

// deleteAddress thunk
export const deleteAddress = createAsyncThunk("/user/api/delete/address/", async ({ address_id, header }: FormValues_Props, { rejectWithValue, dispatch }): Promise<any> => {
    try {
        const response = await DELETEADDRESS(address_id, header);
        const result: any = response?.data;
        if (result?.success) {
            showToast({ message: result?.message || 'Address removed!', type: 'success', durationTime: 3500, position: "top-center" });
            dispatch(getUserDetails({ header }));
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        showToast({ message: err?.payload?.message || 'Failed to removed address.', type: 'error', durationTime: 3500, position: "top-center" });
        return err;
    }
});


const UserSlice = createSlice({
    name: "userSlice",
    initialState: {
        user_data: [],
        address_data: [],
        user_loading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        // getUserDetails states
        builder.addCase(getUserDetails.pending, (state) => {
            state.user_loading = true;
        })
        builder.addCase(getUserDetails.fulfilled, (state, { payload }) => {
            state.user_loading = false;
            const user_data: any = payload?.data;
            state.user_data = user_data;
        })
        builder.addCase(getUserDetails.rejected, (state, { payload }) => {
            state.user_loading = false;
            const err: any | null = payload;
            state.error = err;
        })

        // getAddress states
        builder.addCase(getAddress.pending, (state) => {
            state.user_loading = true;
        })
        builder.addCase(getAddress.fulfilled, (state, { payload }) => {
            state.user_loading = false;
            const address_data: any = payload?.data;
            state.address_data = address_data;
        })
        builder.addCase(getAddress.rejected, (state, { payload }) => {
            state.user_loading = false;
            const err: any | null = payload;
            state.error = err;
        })
    }
})


// export const { } = UserSlice.actions;
export default UserSlice.reducer;