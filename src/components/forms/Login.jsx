import React from 'react'

function Login() {
    return (
        <div className='w-[100%] absolute top-2/4 left-2/4 -translate-x-[50%] -translate-y-[50%]  z-[5] sm:w-[100%] cursor-auto lg:w-[500px] rounded-lg bg-white py-4 px-3'>
            <div className='text-center capitalize font-bold text-[20px]'>login</div>
            <div className='w-full my-2'>
                <label>userName :</label>
                <input className='block mt-1 rounded outline-none py-1 px-2  w-full' type='text' placeholder='type your name' />
            </div>
            <div className='w-full my-2'>
                <label>password :</label>
                <input className='block mt-1 rounded outline-none py-1 px-2  w-full' type='password' placeholder='type your password' />
            </div>
            <button className='rounded bg-blue-500 text-white text-lg py-1 px-5 cursor-pointer my-2' >
                login
            </button>
        </div>
    )
}

export default Login
