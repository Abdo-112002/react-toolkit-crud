
import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deletePost, getAllPosts } from '../store/PostSlice';
// import { useLoaderData } from 'react-router-dom';
import DataTable from '../components/DataTable';
import LoadingHOC from '../UTIL/LoadingHOC';


function Home() {
    const {posts , loading , error} = useSelector((state) => state.posts);
    const {isLogin} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    let CustomLoading = LoadingHOC(DataTable,{posts,loading,error});

    console.log("home");

    useEffect(() => {
        dispatch(getAllPosts());
    },[dispatch]);

    const deleteRecord = useCallback((id) => {
      if(!isLogin) {
        return alert("you need to login");
      }
      if(window.confirm('Are you sure you want to delete')){
        dispatch(deletePost(id));
      }
    },[dispatch,isLogin]);

    // const data= useLoaderData();
    // console.log(data);

  return <CustomLoading deleteRecord={deleteRecord}/>;
}

export default Home
