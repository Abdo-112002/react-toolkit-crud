
import { cloneElement } from "react";
import SpinnerLoader from "../components/SpinnerLoader";


function LoadingHOC(Component,{posts:data,loading,error}) {
    let loader = <div><SpinnerLoader/></div>;
    let errorMsg = <div className='text-xl font-thin capitalize text-center'>{error}</div>;
    let notFoundMsg = <div className='text-xl font-thin capitalize text-center'>no data to display</div>;


    const cloneButton = () => {
        let newButton = cloneElement(Component.children,{...Component.children.props , disabled: loading},loader);
        return loading
        ? newButton
        : Component.children ;
    }

    const WrappedComponent = (props) => {
        return loading 
        ? loader
        : data.length > 0
        ? <Component {...props} data={data} />
        : error 
        ? errorMsg
        : notFoundMsg
    }
    return (Component.children.type === 'button') ? cloneButton : WrappedComponent;
}

export default LoadingHOC
