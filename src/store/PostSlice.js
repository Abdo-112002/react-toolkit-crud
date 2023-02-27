
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios";

const POST_STATE = {
    posts : [],
    loading : false,
    error : null,
};

export const getAllPosts = createAsyncThunk('posts/getPosts',async (_ , thunkAPI ) => {
    const {rejectWithValue } = thunkAPI;
    try{
        let res =  await fetch('http://localhost:5000/posts');
        let data = await res.json();
        return data;
    }catch(error){
        console.log(error);
        return rejectWithValue(error.message);
    }
});

export const getAllDataLoader = async (url) => {
        let res =  await fetch(url);
        let data = await res.json();
        return data;
}



const postSlice = createSlice({
    name : "posts",
    initialState : POST_STATE,
    reducers : {
    },
    extraReducers : {
        [getAllPosts.pending] : (state,action) => {
            state.loading = true;
            state.error = null;
        },
        [getAllPosts.fulfilled] : (state,action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [getAllPosts.rejected] : (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const postReducer = postSlice.reducer;
export const postActions = postSlice.actions;