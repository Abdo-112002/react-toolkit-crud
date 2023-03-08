
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen : false,
    componentName : "",
    contentPosition : null,
}

const ModalSlice = createSlice({
    name:'modal',
    initialState,
    reducers : {
        openModal : (state,action) => {
            state.isOpen = true;
            state.componentName = action.payload.compName;
            state.contentPosition = action.payload.position;
        },
        closeModal : (state,action) => {
            state.isOpen = false;
            state.componentName = '';
            state.contentPosition = null;
        },
    },
})


export const { openModal, closeModal} = ModalSlice.actions;
export default ModalSlice.reducer;
