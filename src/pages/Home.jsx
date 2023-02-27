
import React , {useEffect} from 'react';

import {useDispatch , useSelector} from 'react-redux';
import {getAllPosts} from '../store/PostSlice';
// import { useLoaderData } from 'react-router-dom';
import DataTable from '../components/DataTable';
import LoadingHOC from '../UTIL/LoadingHOC';


function Home() {
    const {posts , loading , error} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    let CustomLoading = LoadingHOC(DataTable,{posts,loading,error});

    useEffect(() => {
        dispatch(getAllPosts());
    },[dispatch]);

    // const data= useLoaderData();
    // console.log(data);

  return <CustomLoading/>;
}

export default Home
