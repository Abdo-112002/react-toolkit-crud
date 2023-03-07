

import { createSlice } from "@reduxjs/toolkit";

const initialState = {userName : 'body' , isLogin : true};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers : {},
    extraReducers :{},
})

export const authReducer = AuthSlice.reducer;
export default AuthSlice;
