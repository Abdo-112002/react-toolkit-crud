
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
      <>
        <main className='text-gray-500'>
          <header className='bg-slate-200'>
            <div className='md:container container mx-auto py-9 h-[200px] flex justify-between items-start'>
                <div>
                    <h2 className='text-slate-800 text-3xl font-medium capitalize'>hello tailwind</h2>
                    <span className='text-sm capitalize'>this's the css framework</span>
                </div>
                <div className='flex gap-2 items-center justify-between'>
                  <label htmlFor='add'>theme</label>
                  <input type={'checkbox'} id="add"/>
                </div>
            </div>
          </header>
          <section className='container text-center cartWrapper -mt-20'>
              <div className='cart'>
                  <div className='font-bold text-5xl text-black-900'>
                    1044
                  </div>
                  <p className='uppercase text-sm tracking-[0.3em] font-thin'>followers</p>
                  <span className='font-bold text-sm'>90 Today</span>
              </div>
              <div className='cart'>
              <div className='font-bold text-5xl text-black-900'>
                    1044
                  </div>
                  <p className='uppercase text-sm tracking-[0.3em] font-thin'>followers</p>
                  <span className='font-bold text-sm'>90 Today</span>
              </div>
              <div className='cart'>
              <div className='font-bold text-5xl text-black-900'>
                    1044
                  </div>
                  <p className='uppercase text-sm tracking-[0.3em] font-thin'>followers</p>
                  <span className='font-bold text-sm'>90 Today</span>
              </div>
              <div className='cart before:bg-amber-500'>
              <div className='font-bold text-5xl text-black-900'>
                    1044
                  </div>
                  <p className='uppercase text-sm tracking-[0.3em] font-thin'>followers</p>
                  <span className='font-bold text-sm'>90 Today</span>
              </div>
          </section>
        </main>

        <Header/>
        <Home/>


      </>
  );
}

export default App;
