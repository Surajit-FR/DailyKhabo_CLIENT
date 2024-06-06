import { configureStore } from "@reduxjs/toolkit";
import UtilitySlice from "../slices/UtilitySlice";

export const Store = configureStore({
    reducer: {
        utilitySlice: UtilitySlice,
    },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({ serializableCheck: false })
});