
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useFetchPost from '../hooks/use-fetch-post';

function PostDetails() {
  const {loading, error , record} = useFetchPost();
  
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch({type : 'posts/cleanRecord'});
    }
  }, [dispatch]);

  return (
    <div className='container'>
    <h1 className='text-2xl my-5'>{error}</h1>
      <div className='text-center text-2xl my-5'>
              <h3>id : {record?.id}</h3>
              <h3>title : {record?.title}</h3>
              <h3>desc : {record?.desc}</h3>
              <h3>author : {record?.author}</h3>
        </div>
    </div>
  )
}

export default PostDetails
