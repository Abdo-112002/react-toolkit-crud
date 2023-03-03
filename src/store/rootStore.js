

import {configureStore} from '@reduxjs/toolkit';
import { authReducer } from './AuthSlice';
import { postReducer } from './PostSlice';

const rootStore = configureStore({
    reducer : {
        posts : postReducer,
        auth : authReducer,
    }
});


export default rootStore;