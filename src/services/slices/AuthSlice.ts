import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOGIN, REGISTER } from "../api/Api";
import { AuthResponse, UserAuth_Props } from "../../config/DataTypes.config";
import Cookies from 'js-cookie';
import { EncryptData } from "../../helpers/EncryptDecrypt";
import { showToast } from "../../helpers/Toast";
import { closeAuthModal } from "../../helpers/AuthSuccess";

// loginUser thunk
export const loginUser = createAsyncThunk("/api/login", async ({ data, navigate, resetForm }: UserAuth_Props, { rejectWithValue }): Promise<AuthResponse | any> => {
    try {
        const response = await LOGIN(data);
        const result: AuthResponse = response?.data;
        if (result?.success) {
            if (result?.data?.remember_me === true) {
                const encUserData = EncryptData(data);
                Cookies.set('user', encUserData, {
                    expires: 7, // Cookie expiration (days)
                    sameSite: 'None', // Ensure the cookie is sent in all contexts
                });
            } else {
                Cookies.remove('user');
                resetForm && resetForm();
            }
            const user = EncryptData(result?.data);
            window.localStorage.setItem("token", JSON.stringify(result?.token));
            window.localStorage.setItem("user", user);
            navigate('/home');
            closeAuthModal();

            return result;
        }
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        showToast({ message: err?.payload?.message || 'Login failed.', type: 'error', durationTime: 3500, position: "bottom-center" });
        return err;
    }
});

// registerUser thunk
export const registerUser = createAsyncThunk("/api/register", async ({ data, navigate, resetForm }: UserAuth_Props, { rejectWithValue }): Promise<AuthResponse | any> => {
    try {
        const response = await REGISTER(data);
        const result: AuthResponse = response?.data;
        if (result?.success) {
            if (result?.data?.remember_me === true) {
                const encUserData = EncryptData(data);
                Cookies.set('user', encUserData, {
                    expires: 7, // Cookie expiration (days)
                    sameSite: 'None', // Ensure the cookie is sent in all contexts
                });
            } else {
                Cookies.remove('user');
            }
            const user = EncryptData(result?.data);
            window.localStorage.setItem("token", JSON.stringify(result?.token));
            window.localStorage.setItem("user", user);
            navigate('/home');
            closeAuthModal();
            resetForm && resetForm();

            return result;
        }
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        showToast({ message: err?.payload?.message || 'Signup failed.', type: 'error', durationTime: 3500, position: "bottom-center" });
        return err;
    }
});

const AuthSlice = createSlice({
    name: "authSlice",
    initialState: {
        user_data: [],
        auth_loading: false,
        error: null
    },
    reducers: {
        logoutUser(state) {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('user');
            state.user_data = [];
        },
        clearAuthError(state) {
            state.error = null;
        },
    },
    extraReducers: builder => {
        // loginUser states
        builder.addCase(loginUser.pending, (state) => {
            state.auth_loading = true;
        })
        builder.addCase(loginUser.fulfilled, (state, { payload }) => {
            state.auth_loading = false;
            const user_data: any = payload;
            state.user_data = user_data;
        })
        builder.addCase(loginUser.rejected, (state, { payload }) => {
            state.auth_loading = false;
            const err: any | null = payload;
            state.error = err;
        })

        // registerUser states
        builder.addCase(registerUser.pending, (state) => {
            state.auth_loading = true;
        })
        builder.addCase(registerUser.fulfilled, (state, { payload }) => {
            state.auth_loading = false;
            const user_data: any = payload;
            state.user_data = user_data;
        })
        builder.addCase(registerUser.rejected, (state, { payload }) => {
            state.auth_loading = false;
            const err: any | null = payload;
            state.error = err;
        })
    }
})


export const { logoutUser, clearAuthError } = AuthSlice.actions;
export default AuthSlice.reducer;