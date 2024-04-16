import { configureStore } from "@reduxjs/toolkit";

import modalSliceReducer from "./modalSlice/modalSlice";

export const store = configureStore({
    reducer : {
        modal : modalSliceReducer
    }
})