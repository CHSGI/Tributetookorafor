import React from 'react'
import Flower1 from "../assets/img/flower1.png"
import Flower2 from "../assets/img/flower2.png"
import PictureAlbum from "../assets/img/album.png";
import Grey from "../assets/img/babaGrey.png"

export default function About() {
  return (
    <div className='relative w-full h-full p-10 bg-white' id='about'>
        <p className='font-serif text-lg text-center  text-customBrown lg:text-2xl'>
        <span className='text-md'>ABOUT</span> <br />
        EMMANUEL OKORAFOR
        </p>
        <p className='mt-4 font-serif text-xs text-center '>
        16 JUNE 1957 - 15 JUNE 2024
        </p>
        <div className='flex flex-row items-center justify-center w-1/3 h-12 mx-auto mt-6 '>
            <img src={Flower1} className='w-52'/>
            <img src={Flower2} className='w-52' />
        </div>
        <p className='w-2/3 mx-auto mt-4 text-xs leading-6 text-center lg:w-1/3 opacity-35'>
        Dear Lord we commend the soul of Emmanuel Okorafor into your merciful hands, Trusting in your boundless love and compassion.May he find rest and solace in your presence,And may he be welcomed into the joy of your heavenly kingdom.
        Amen
        </p>

        <img src={PictureAlbum} alt="album pictures" className="w-5/6 mx-auto  lg:w-3/5"/>
        <img src={Grey} className='absolute left-0 w-44 top-1/2'/>
    </div>
  )
}
