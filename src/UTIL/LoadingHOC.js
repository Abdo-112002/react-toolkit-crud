

import SpinnerLoader from "../components/SpinnerLoader";


function LoadingHOC(Component,{posts:data,loading,error}) {
    let loader = <div><SpinnerLoader/></div>;
    let errorMsg = <div className='text-xl font-thin capitalize text-center'>{error}</div>;
    let notFoundMsg = <div className='text-xl font-thin capitalize text-center'>no data to display</div>;

    const WrappedComponent = (props) => {
        return loading 
        ? loader
        : data.length > 0
        ? <Component {...props} data={data} />
        : error 
        ? errorMsg
        : notFoundMsg
    }


    return WrappedComponent

}

export default LoadingHOC
