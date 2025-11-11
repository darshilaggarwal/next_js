import React from 'react'

const createsnippets = () => {
    return (
        <>

            <div className='text-2xl font-semibold p-5'>CREATE A NEW SNIPPET</div>

            <div className='p-5'>
                <h2 className='font-medium text-xl '>Title</h2>
                <input
                    type="text"
                    className="w-1/2 border-2 h-10 border-black rounded"
                    placeholder="Enter Title..."
                />

            </div>

            <div className='p-5'>
                <h2 className='font-medium text-xl '>Code</h2>
                <textarea className="w-1/2 border-2 h-10 border-black rounded"
                 placeholder="Enter Code..."></textarea>
               

            </div>




        </>

    )
}

export default createsnippets

