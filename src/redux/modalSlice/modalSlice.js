import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stateOfModal : false,
    modalMode : "",
    modalId : null
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers : {
        toggleStateOfModal : (state, action) => {
            state.stateOfModal = action.payload
        },
        switchModalMode : (state, action) => {
            state.modalMode = action.payload
        },
        switchModalId : (state, action) => {
            state.modalId = action.payload
        }
    }
})

export const {
    toggleStateOfModal,
    switchModalMode,
    switchModalId
} = modalSlice.actions

export default modalSlice.reducer