

import {configureStore} from '@reduxjs/toolkit';
import { postReducer } from './PostSlice';

const rootStore = configureStore({
    reducer : {
        posts : postReducer,
    }
});


export default rootStore;