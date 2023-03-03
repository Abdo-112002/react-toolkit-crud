

import React from 'react';
import { useNavigate } from 'react-router-dom';

function PostItem({deleteRecord,posts}) {

    const navigate = useNavigate();

    console.log("PostItem");
    let allPosts = posts?.map((item,ind)=>(
        <tr key={item.id}>
            <td className="border  px-4 py-2  font-medium">{++ind}</td>
            <td className="border  px-4 py-2  font-medium">
                {item.title}
            </td>
            <td className="border  px-4 py-2  font-medium">
                <div className='flex gap-2'>
                    <button 
                        onClick={()=> navigate(`/post/${item.id}/Edit`,{replace: true})} 
                        className='text-base select-none capitalize rounded py-1 px-4 bg-green-500 text-white'>
                        update
                    </button>
                    <button 
                        onClick={()=> deleteRecord(item.id)}
                        className='text-base capitalize select-none  rounded py-1 px-4 text-white bg-red-500'>
                        delete
                    </button>
                    <button 
                        onClick={()=> navigate(`/post/${item.id}`)} 
                        className='text-base select-none capitalize rounded py-1 px-4 bg-yellow-500 text-white'>
                        view
                    </button>
                </div>
            </td>
        </tr>
    ));

    return  allPosts
}

export default PostItem
