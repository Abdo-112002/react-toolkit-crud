import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";




const useCheckPostId = ()=> {
    const { id } = useParams();
   // check if the post id string or number
   const {posts} = useSelector((state) => state.posts);
    if(isNaN(id)){
        return true;
    }
   
    return posts.find((post) => post.id === id)
}

export default useCheckPostId;



