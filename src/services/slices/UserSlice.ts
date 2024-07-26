import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ADDADDRESS, DELETEADDRESS, GETADDRESS, GETUSERDETAILS, UPDATEADDRESS, UPDATEUSERDATA } from "../api/Api";
import { showToast } from "../../helpers/Toast";
import { FormValuesProps } from "../../types/formValues";

// updateUser thunk
export const updateUser = createAsyncThunk("/user/api/update/user/data", async ({ data, header }: FormValuesProps, { rejectWithValue, dispatch }): Promise<any> => {
    try {
        const response = await UPDATEUSERDATA(data, header);
        const result: any = response?.data;
        if (result?.success) {
            showToast({ message: result?.message || 'Your data updated!', type: 'success', durationTime: 3500, position: "top-center" });
            dispatch(getUserDetails({ header }));
            return result;
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        showToast({ message: err?.payload?.message || 'Failed to removed address.', type: 'error', durationTime: 3500, position: "top-center" });
        return err;
    }
});

// addAddress thunk
export const addAddress = createAsyncThunk("/user/api/add/user/address", async ({ data, resetForm, header }: FormValuesProps, { rejectWithValue, dispatch }): Promise<any> => {
    try {
        const response = await ADDADDRESS(data, header);
        const result: any = response?.data;
        if (result?.success) {
            showToast({ message: result?.message || 'Address updated!', type: 'success', durationTime: 3500, position: "top-center" });
            dispatch(getUserDetails({ header }));
            resetForm && resetForm();
            return result;
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        showToast({ message: err?.payload?.message || 'Failed to removed address.', type: 'error', durationTime: 3500, position: "top-center" });
        return err;
    }
});

// getUserDetails thunk
export const getUserDetails = createAsyncThunk("/user/api/get/user/details", async ({ header }: FormValuesProps, { rejectWithValue }): Promise<any> => {
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
export const getAddress = createAsyncThunk("/user/api/get/address/", async ({ address_id, header }: FormValuesProps, { rejectWithValue }): Promise<any> => {
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
export const updateAddress = createAsyncThunk("/user/api/update/user/address/", async ({ address_id, data, resetForm, header }: FormValuesProps, { rejectWithValue, dispatch }): Promise<any> => {
    try {
        const response = await UPDATEADDRESS(address_id, data, header);
        const result: any = response?.data;
        if (result?.success) {
            showToast({ message: result?.message || 'Address updated!', type: 'success', durationTime: 3500, position: "top-center" });
            dispatch(getUserDetails({ header }));
            resetForm && resetForm();
            return result;
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        showToast({ message: err?.payload?.message || 'Failed to removed address.', type: 'error', durationTime: 3500, position: "top-center" });
        return err;
    }
});

// deleteAddress thunk
export const deleteAddress = createAsyncThunk("/user/api/delete/address/", async ({ address_id, header }: FormValuesProps, { rejectWithValue, dispatch }): Promise<any> => {
    try {
        const response = await DELETEADDRESS(address_id, header);
        const result: any = response?.data;
        if (result?.success) {
            showToast({ message: result?.message || 'Address removed!', type: 'success', durationTime: 3500, position: "top-center" });
            dispatch(getUserDetails({ header }));
            return result;
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
        // updateUser states
        builder.addCase(updateUser.pending, (state) => {
            state.user_loading = true;
        })
        builder.addCase(updateUser.fulfilled, (state, { payload }) => {
            state.user_loading = false;
        })
        builder.addCase(updateUser.rejected, (state, { payload }) => {
            state.user_loading = false;
        })

        // addAddress states
        builder.addCase(addAddress.pending, (state) => {
            state.user_loading = true;
        })
        builder.addCase(addAddress.fulfilled, (state, { payload }) => {
            state.user_loading = false;
        })
        builder.addCase(addAddress.rejected, (state, { payload }) => {
            state.user_loading = false;
        })

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

        // updateAddress states
        builder.addCase(updateAddress.pending, (state) => {
            state.user_loading = true;
        })
        builder.addCase(updateAddress.fulfilled, (state, { payload }) => {
            state.user_loading = false;
        })
        builder.addCase(updateAddress.rejected, (state, { payload }) => {
            state.user_loading = false;
        })

        // deleteAddress states
        builder.addCase(deleteAddress.pending, (state) => {
            state.user_loading = true;
        })
        builder.addCase(deleteAddress.fulfilled, (state, { payload }) => {
            state.user_loading = false;
        })
        builder.addCase(deleteAddress.rejected, (state, { payload }) => {
            state.user_loading = false;
        })
    }
})


// export const { } = UserSlice.actions;
export default UserSlice.reducer;