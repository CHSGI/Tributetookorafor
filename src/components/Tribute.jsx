"use client"

import React, { useState, useRef } from 'react'
import BabaGrey from "../assets/img/babaGrey.png"
import Modal from './Modal'


export default function Tribute() {
    const [modalOpen, setModalOpen] = useState(false)
    const[tribute, setTribute] = useState([
        {
            name: "Chinwe Nwoke",
            description: "Dearest Emmanuel \n So sad you're no more, but God knows best, as He gives and takes. Will be there for Amanda & Osi. May God preserve you in His eternal life till we meet again, a precious friend and sister. Love you loads.God's comfort of love to your lovely family and friends.... read more",
        },
        {
            name: "Athan Nwadike",
            description: "Dear Emmanuel, \n Words fail me. Rest in God till resurrection day and may God comfort your family."
        },
        {
            name: "Josephine Yul",
            description: "One more angel in heaven…."
        },
        {
            name: "Alps Yemi",
            description: "Emmanuel is truly gone?This reality is so hard to take in. We prayed so hard for her recovery, God knows we prayed. But God has chosen the very best for Himself. Ose was indeed the best in every imaginable way. Just like Augusta said, she was always peaceful right from childhood. As a young child, wherever you asked her to stay is exactly where you would find her, as long as she had her thumb in her mouth.Ose was gentle, kind, generous, thoughtful,... read more"
        },
        {
            name: "Deborah O.",
            description: "Dear Ose,\n I never met you but I prayed so much for your cure. I thank God for all the help you received during your illness and the fact that you received the last sacraments. May God continue to bless and strengthen your loved ones. You fought the good fight!"
        },
    ])
  return (
    <>
        {modalOpen && 
            <div className=' fixed top-0 w-full h-screen backdrop-blur-lg flex justify-center items-center z-50'>
            <div className='w-4/5 lg:w-1/2 h-auto lg:h-3/4 rounded-2xl bg-white p-7'>
              <p className='cursor-pointer font-semibold text-customBrown text-2xl text-right' onClick={()=>{setModalOpen(false)}}>&times;</p>
              <p className='font-serif text-2xl m-3 text-customBrown'>Leave your Tribute</p>
              <form action="">
                <input type="text" id='name' name='name' placeholder='FULL NAME' className=' w-full mt-5 mx-auto block outline-none border-customGold border-2 rounded-xl p-2 text-sm' />
                <textarea name="tribute" rows="5" cols={"50"}  id="Tribute" placeholder='ADD YOUR TRIBUTE TEXT HERE' className='mt-5 mx-auto w-full block outline-none p-2 border-customGold border-2 rounded-xl text-sm'></textarea>
                <button className=' p-3 bg-customGold rounded-full text-white text-xs mt-4 font-medium'>
                  PUBLISH TRIBUTE</button>
              </form>
            </div> 
          </div>
        }
        <div className='w-full h-full bg-orange-50 px-10 py-5'>
        <p className='font-serif text-2xl lg:text-4xl text-customBrown text-center'>
            SEND YOUR TRIBUTES
        </p>
        <div className='h-full lg:h-screen flex flex-col lg:flex-row justify-between px-20 mt-5'>
            <div className='w-full h-full lg:w-2/3 mr-0 lg:mr-4 px-2 lg:overflow-x-hidden lg:overflow-scroll'>
                {tribute.map(data => {
                    return(
                        <>
                            <div className='border-2 border-customGold my-3 rounded-2xl px-10 p-4 bg-white'>
                                <h2 className='text-customBrown text-lg font-semibold'>{data.name}</h2>
                                <p></p>
                                <p className='text-xs leading-6 mt-2 opacity-40'>{data.description}</p>
                            </div>
                        </>
                    )
                })}
                <button className=' p-3 bg-customGold text-white rounded-full text-sm block my-4 mx-auto'>LOAD MORE</button>

            </div>
            <div className='w-full lg:w-1/4 bg-orange-200 ml-0 lg:ml-4 rounded-lg text-customBrown font-serif p-5 relative'>
                <p className='text-sm'>
                SERVICE OF SONGS
                </p>
                <p className='text-xs leading-6 mt-2'>
                <span className='font-semibold'>3 August 2024</span> <br />
                HIS RESIDENCE <br />
                721 Road, F Close <br />
                Festac Town, Lagos, Nigeria <br />
                5:00 PM - 7:00 PM
                </p>
                
                <p className='mt-4 text-xs leading-6'>
                <span className=' font-semibold'>16 August 2024 <br /></span>
                <span className='font-medium'>FOURSQUARE GOSPEL <br />
                CHURCH <br /></span>
                House 1 (Plot 602A) <br />
                322 Road, E Close Roundabout <br />
                Festac Town, Lagos, Nigeria <br />
                5:00 PM - 7:00 PM
                </p>
                <p className='my-4'>
                FUNERAL SERVICE
                </p>
                <p className=' text-xs leading-6 mb-6'>
                <span className='font-semibold'>22 August 2024 <br /></span>
                UGO VILLAGE SQUARE <br />
                Arochukwu, Abia State, Nigeria <br />
                11:00 AM
                </p>
                <img src={BabaGrey} className='absolute right-0 bottom-20 w-5/6 scale-x-[-1]' />
                <button onClick={()=>{setModalOpen(true)}} className='rounded-full bg-customGold text-white text-xs block mx-auto font-sans p-4 '>SEND YOUR TRIBUTE</button>


            </div>
        </div>
        
    </div>
    </>
  )
}
