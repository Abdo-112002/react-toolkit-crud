
import React from 'react';

import SpinnerLoader from '../components/SpinnerLoader';

function Home() {
  return (
    <div className='container'>
        <div className='lg:w-[700px] w-full p-4 max-h-[700px]  m-auto overflow-auto'>
        <div class="rounded-xl overflow-hidden border">
  <table class="table-auto text-center w-full">
    <thead>
      <tr className='bg-slate-100'>
        <th class="px-4 py-2 border uppercase font-bold">#</th>
        <th class="px-4 py-2 border uppercase font-bold">post</th>
        <th class="px-4 py-2 border uppercase font-bold">operations</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border  px-4 py-2  font-medium">1</td>
        <td class="border  px-4 py-2  font-medium">
            Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design
            {/* <SpinnerLoader/> */}
        </td>
        <td class="border  px-4 py-2  font-medium">
            <div className='flex gap-2'>
                <button className='text-base capitalize rounded py-1 px-4 bg-green-500 text-white'>update</button>
                <button className='text-base capitalize rounded py-1 px-4 text-white bg-red-500'>delete</button>
            </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    </div>
  )
}

export default Home
