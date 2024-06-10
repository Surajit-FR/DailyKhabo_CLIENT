import { configureStore } from "@reduxjs/toolkit";
import UtilitySlice from "../slices/UtilitySlice";
import AuthSlice from "../slices/AuthSlice";
import CartSlice from "../slices/CartSlice";

export const Store = configureStore({
    reducer: {
        authSlice: AuthSlice,
        utilitySlice: UtilitySlice,
        cartSlice: CartSlice,
    },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({ serializableCheck: false })
});