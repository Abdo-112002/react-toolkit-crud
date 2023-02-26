

import React from 'react'

function Header() {
  return (
    <div className='container my-5'>
        <h2 className='font-bold capitalize text-black text-3xl my-5'>curd</h2>
        <nav className='bg-slate-100 text-black flex justify-between items-center p-[10px] rounded-[10px]'>
            <div className='flex items-center gap-[10px]'>
                <span className='capitalize text-base font-bold'>home</span>
                <span className='font-thin capitalize text-base'>add post</span>
            </div>
            <div className='cursor-pointer capitalize font-thin'>
                login
            </div>
        </nav>
    </div>
  )
}

export default Header
