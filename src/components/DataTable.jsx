
import React from 'react'
import PostItem from './PostItem'

function DataTable({deleteRecord,data}) {
    console.log("DataTable");
  return (
    <div className='container'>
        <div className='lg:w-[700px] w-full p-4 max-h-[700px]  m-auto overflow-hidden'>
            <div className="rounded-xl  border overflow-auto">
                <table className="table-auto text-center w-full">
                    <thead>
                    <tr className='bg-slate-100'>
                        <th className="px-4 py-2 border uppercase font-bold">#</th>
                        <th className="px-4 py-2 border uppercase font-bold">post</th>
                        <th className="px-4 py-2 border uppercase font-bold">operations</th>
                    </tr>
                    </thead>
                    <tbody>
                        <PostItem deleteRecord={deleteRecord} posts={data}/>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default React.memo(DataTable);
