import React from 'react'
import Flower1 from "../assets/img/flower1.png"
import Flower2 from "../assets/img/flower2.png"
import PictureAlbum from "../assets/img/album.png";
import Grey from "../assets/img/babaGrey.png"

export default function About() {
  return (
    <div className='w-full h-screen p-10 relative'>
        <p className=' text-customBrown font-serif text-center text-2xl'>
        <span className='text-lg'>ABOUT</span> <br />
        EMMANUEL OKORAFOR
        </p>
        <p className=' text-xs font-serif text-center mt-4'>
        16 JUNE 1957 - 15 JUNE 2024
        </p>
        <div className=' w-1/3 mx-auto h-12 flex flex-row items-center justify-center mt-6'>
            <img src={Flower1} className='w-52'/>
            <img src={Flower2} className='w-52' />
        </div>
        <p className='w-1/3 opacity-35 mt-4 text-center mx-auto text-xs leading-6'>
        Dear Lord we commend the soul of Emmanuel Okorafor into your merciful hands, Trusting in your boundless love and compassion.May he find rest and solace in your presence,And may he be welcomed into the joy of your heavenly kingdom.
        Amen
        </p>

        <img src={PictureAlbum} alt="album pictures" className="w-3/5 mx-auto"/>
        <img src={Grey} className=' w-58 absolute top-20 left-0'/>
    </div>
  )
}
