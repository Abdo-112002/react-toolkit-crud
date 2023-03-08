

import {configureStore} from '@reduxjs/toolkit';
import { authReducer } from './AuthSlice';
import { postReducer } from './PostSlice';
import modalReducer from "./ModalSlice";

const rootStore = configureStore({
    reducer : {
        posts : postReducer,
        auth : authReducer,
        modal : modalReducer,
    }
});


export default rootStore;