
import React from 'react'
import PostItem from './PostItem'

function DataTable({data}) {
  return (
    <div className='container'>
        <div className='lg:w-[700px] w-full p-4 max-h-[700px]  m-auto overflow-auto'>
            <div className="rounded-xl overflow-hidden border">
                <table className="table-auto text-center w-full">
                    <thead>
                    <tr className='bg-slate-100'>
                        <th className="px-4 py-2 border uppercase font-bold">#</th>
                        <th className="px-4 py-2 border uppercase font-bold">post</th>
                        <th className="px-4 py-2 border uppercase font-bold">operations</th>
                    </tr>
                    </thead>
                    <tbody>
                        <PostItem posts={data}/>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default DataTable
