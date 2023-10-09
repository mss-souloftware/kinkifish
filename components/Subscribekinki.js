import React from 'react'

const Subscribekinki = () => {
  return (
    <div className='pb-8 md:py-13 pr-2'>
        <h1 className='tracking-widest text-4xl font-semibold uppercase text-center'>"Subscribe and Get KINKI"</h1>
        <p className='text-lg font-medium text-center py-6 w-96 mx-auto'>Type your email down below and be young wild generation</p>
        <div className='text-center py-5'>
            <div className='w-96 mx-auto bg-white p-3 rounded-md shadow-md shadow-gray-400'>
            <input type='text' placeholder='Add your email here' className='px-5 py-3 w-3/4 outline-none'/>
            <button className='px-5 py-3 bg-black text-white duration-200 hover:bg-white border border-black hover:text-black rounded-md w-1/4'>SEND</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribekinki