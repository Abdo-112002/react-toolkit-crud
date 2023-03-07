import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export function protectEditPage(Component) {
  const Wrapper = (props) => {
    const {posts} = useSelector((state) => state.posts);
    return posts?.length > 0 ? <Component {...props}/> : <Navigate to='/'/>
  }
  return Wrapper;
}

export function protectUerAuth(Component) {
  const Wrapper = (props) => {
    const {isLogin} = useSelector((state) => state.auth);
    return isLogin ? <Component {...props}/> : <Navigate to='/'/>
  }
  return Wrapper;
}
