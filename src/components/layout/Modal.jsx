import React from 'react';


function Modal({children,isOpen , close , contentPosition}) {
    
    return (
        <>
            {isOpen &&( <div 
                onClick={close} 
                className={`w-full z-[1] p-5 h-screen fixed top-0 left-0 bg-black bg-opacity-80 flex  justify-center ${contentPosition === 'center' ? 'items-center' : 'items-start '}`}>
                </div> )
             }
            <div>
                {isOpen && children} 
            </div>
        </>
    )
}

export default Modal
