import React from 'react'

export default function Modal() {
  return (
    <div className=' fixed top-0 w-full h-screen backdrop-blur-lg flex justify-center items-center z-50'>
      <div className='w-4/5 lg:w-1/2 h-auto lg:h-3/4 rounded-2xl bg-white p-7'>
        <p className='cursor-pointer font-semibold text-customBrown text-2xl text-right'>&times;</p>
        <p className='font-serif text-2xl m-3 text-customBrown'>Leave your Tribute</p>
        <form action="">
          <input type="text" id='name' name='name' placeholder='FULL NAME' className=' w-full mt-5 mx-auto block outline-none border-customGold border-2 rounded-xl p-2 text-sm' />
          <textarea name="tribute" rows="5" cols={"50"}  id="Tribute" placeholder='ADD YOUR TRIBUTE TEXT HERE' className='mt-5 mx-auto w-full block outline-none p-2 border-customGold border-2 rounded-xl text-sm'></textarea>
          <button className=' p-3 bg-customGold rounded-full text-white text-xs mt-4 font-medium'>
            PUBLISH TRIBUTE</button>
        </form>
      </div> 
    </div>
  )
}
