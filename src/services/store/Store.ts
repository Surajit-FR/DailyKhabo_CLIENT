import { configureStore } from "@reduxjs/toolkit";
import UtilitySlice from "../slices/UtilitySlice";
import AuthSlice from "../slices/AuthSlice";
import CartSlice from "../slices/CartSlice";
import UserSlice from "../slices/UserSlice";

export const Store = configureStore({
    reducer: {
        authSlice: AuthSlice,
        userSlice: UserSlice,
        utilitySlice: UtilitySlice,
        cartSlice: CartSlice,
    },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({ serializableCheck: false })
});