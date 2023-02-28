
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
    let {posts} = getState();
    console.log(getState());
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
        }
    },
});

export const postReducer = postSlice.reducer;
export const postActions = postSlice.actions;