import React , {useState , useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SpinnerLoader from '../components/SpinnerLoader';
import useFetchPost from '../hooks/use-fetch-post'
import { updatePost } from '../store/PostSlice';
import { protectEditPage } from '../UTIL/withGaurd';


function EditPost() {
  const {loading, error , record} = useFetchPost();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post,setPost] = useState({
      title : "",
      desc : "",
  });

  useEffect(() => {
    if(record){
      setPost({
        title : record.title,
        desc : record.desc,
      })
    }
  }, [record]);

  useEffect(() => {
    return () => {
      dispatch({type : 'posts/cleanRecord'});
    }
  }, [dispatch]);


  const postHandel = (e) => {
    e.preventDefault();
    dispatch(updatePost({...record , ...post}))
    .unwrap()
    .then(() => {
      navigate('/', {replace: true});
    }).catch((err) => {
      console.log(err);
    });
  }
  
  return (
    <div className='container'>
    <div className='md:w-[400px] w-full mx-auto border p-5 rounded-lg my-5'>
        <p>{error}</p>
        <form name="createPost" onSubmit={postHandel}>
          <div id="form" className="grid w-full grid-cols-6 gap-2 bg-white px-4 py-5 sm:p-6">
    
            <div className="col-span-6 mb-2">
              <label className="label-text required text-sm font-medium text-gray-700" htmlFor="form_siteUrl">Post Title</label>
              <input 
                value={post.title} 
                onChange={(e)=> setPost({...post,title : e.target.value})} 
                type="text" 
                id="form_siteUrl" 
                name="title" 
                required="required" 
                className="input border-r-slate-500 border-2 p-2 rounded w-full outline-none input-bordered input-primary input-bordered mt-1" 
                placeholder='add text'
              />
            </div>

            <div className="col-span-6  mb-2">
              <label className="label-text required text-sm font-medium text-gray-700" htmlFor="form_tagLine">Post description</label>
              <input 
                value={post.desc} 
                onChange={(e)=> setPost({...post,desc : e.target.value})} 
                type="text" 
                id="form_tagLine" 
                name="desc" 
                required="required" 
                className="border-r-slate-500 border-2 rounded p-2 input outline-none w-full input-bordered input-primary input-bordered mt-1" 
                placeholder='add text' 
              />
            </div>

            <div className="col-span-6 ">
              <button disabled={loading} className="flex disabled:opacity-70 mx-auto text-white bg-cyan-500 border-0 py-2 px-8 focus:outline-none transition duration-125 hover:bg-red-600 hover:shadow-2xl rounded text-lg" type="submit">
                  {loading ? <> <SpinnerLoader/> <span>loading</span></> : 'EditPost'}
                </button>
            </div>

          </div>
        </form>
    </div>
  </div>
  )
}

export default protectEditPage(EditPost)
