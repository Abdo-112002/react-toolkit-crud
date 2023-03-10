
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { singePostDetail } from "../store/PostSlice";



const useFetchPost = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {loading, error , record} = useSelector((state) => state.posts);
    useEffect(() => {
        dispatch(singePostDetail(id));
    }, [dispatch,id]);
    
  return {loading, error , record};
}


export default useFetchPost;