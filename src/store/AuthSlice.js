

import { createSlice } from "@reduxjs/toolkit";

const initialState = {userName : 'abdo' , isLogin : true};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers : {},
    extraReducers :{},
})

export const authReducer = AuthSlice.reducer;
export default AuthSlice;
