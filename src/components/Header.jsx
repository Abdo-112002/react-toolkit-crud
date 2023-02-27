

import React from 'react'

import {NavLink} from 'react-router-dom';

function Header() {


  const activeLinkStyle = (props) => {
     console.log(props);
  }
  

  return (
    <div className='container my-5'>
        <h2 className='font-bold capitalize text-black text-3xl my-5'>curd</h2>
        <nav className="bg-slate-200 text-black flex justify-between items-center p-[10px] rounded-[10px]">
            <div className='flex items-center gap-[10px]'>
               <NavLink style={{...activeLinkStyle}} to="/" className="font-medium px-3 py-2 text-slate-700 rounded-lg transition ease-in-out duration-300 hover:scale-110 hover:bg-slate-100 hover:text-slate-900">Home</NavLink>
               <NavLink to="post/createPost" className="font-medium px-3 py-2 text-slate-700 rounded-lg transition ease-in-out duration-300 hover:bg-slate-100 hover:scale-110 hover:text-slate-900">add post</NavLink>
            </div>
            <div className='cursor-pointer capitalize font-thin'>
              <NavLink to="/login" className="font-medium px-3 py-2 text-slate-700 rounded-lg transition ease-in-out duration-300 hover:scale-110 hover:bg-slate-100 hover:text-slate-900">log in</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Header
