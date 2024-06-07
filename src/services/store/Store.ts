import { configureStore } from "@reduxjs/toolkit";
import UtilitySlice from "../slices/UtilitySlice";
import AuthSlice from "../slices/AuthSlice";

export const Store = configureStore({
    reducer: {
        authSlice: AuthSlice,
        utilitySlice: UtilitySlice,
    },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({ serializableCheck: false })
});