
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const POST_STATE = {
    posts : [],
    loading : false,
    error : null,
    record : null,
};

export const getAllPosts = createAsyncThunk('posts/getPosts',async (_ , thunkAPI ) => {
    const {rejectWithValue , getState} = thunkAPI;
    const {auth} = getState();
    const {userName , isLogin} = auth;
    try{
        let res =  await fetch(isLogin ? `http://localhost:5000/posts?author=${userName}` : "http://localhost:5000/posts");
        let data = await res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

export const deletePost = createAsyncThunk('posts/deletePost',async (postId,thunkAPI) => {
    const {rejectWithValue } = thunkAPI;
    try{
        await fetch('http://localhost:5000/posts/'+postId,{
            method: 'DELETE',
        });
        return postId;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

export const createPost = createAsyncThunk(
    'posts/createPost',
    async (post,thunkAPI) => {

    const {rejectWithValue , getState} = thunkAPI;
    let {auth} = getState();
    post.author =  auth.userName;

    try{
        let res =  await fetch('http://localhost:5000/posts',{
            method: 'POST',
            body : JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await res.json();
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

export const updatePost = createAsyncThunk(
    'posts/updatePost',
    async (post,thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try{
            let res =  await fetch(`http://localhost:5000/posts/${post.id}`,{
                method: 'PATCH',
                body : JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let data = await res.json();
            return data;
        }catch(error){
            return rejectWithValue(error.message);
        }
    }
);

export const singePostDetail = createAsyncThunk(
    'posts/singePostDetail',
    async (postId,thunkAPI) => {
        const {rejectWithValue } = thunkAPI;    
        try{
            let res = await fetch('http://localhost:5000/posts/'+postId);
            let record = await res.json();
            return record;
        }catch(error){
            return rejectWithValue(error.message);
        }
    }
);

const postSlice = createSlice({
    name : "posts",
    initialState : POST_STATE,
    reducers : {
        cleanRecord : (state) => {
            state.record = null;
        },
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
        [deletePost.pending] : (state,action) => {
            state.loading = true;
            state.error = null;
        },
        [deletePost.fulfilled] : (state,action) => {
            state.loading = false;
            state.posts = state.posts.filter(post => post.id!== action.payload);
        },
        [deletePost.rejected] : (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [createPost.pending] : (state,action) => {
            state.loading = true;
            state.error = null;
        },
        [createPost.fulfilled] : (state,action) => {
            state.loading = false;
            state.posts.push(action.payload);
        },
        [createPost.rejected] : (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [singePostDetail.pending] : (state,action) => {
            state.loading = true;
            state.error = null;
        },
        [singePostDetail.fulfilled] : (state,action) => {
            state.loading = false;
            state.record = action.payload;
        },
        [singePostDetail.rejected] : (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [updatePost.pending] : (state,action) => {
            state.loading = true;
            state.error = null;
        },
        [updatePost.fulfilled] : (state,action) => {
            state.loading = false;
            state.record = action.payload;
        },
        [updatePost.rejected] : (state,action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const postReducer = postSlice.reducer;
export const postActions = postSlice.actions;