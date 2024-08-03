import bgImage from "../assets/img/bg.png";
import baba from "../assets/img/baba.png"
import flower from "../assets/img/flower.png"
import { useState } from "react";

const Hero = () => {
  
  const [modalOpen, setModalOpen] = useState(false);
  return (
  <>
    {modalOpen && 
            <div className='fixed top-0 z-50 flex items-center justify-center w-full h-screen  backdrop-blur-lg'>
            <div className='w-4/5 h-auto bg-white lg:w-1/2 lg:h-3/4 rounded-2xl p-7'>
              <p className='text-2xl font-semibold text-right cursor-pointer text-customBrown' onClick={()=>{setModalOpen(false)}}>&times;</p>
              <p className='m-3 font-serif text-2xl text-customBrown'>Leave your Tribute</p>
              <form action="">
                <input type="text" id='name' name='name' placeholder='FULL NAME' className='block w-full p-2 mx-auto mt-5 text-sm border-2 outline-none  border-customGold rounded-xl' />
                <textarea name="tribute" rows="5" cols={"50"}  id="Tribute" placeholder='ADD YOUR TRIBUTE TEXT HERE' className='block w-full p-2 mx-auto mt-5 text-sm border-2 outline-none border-customGold rounded-xl'></textarea>
                <button className='p-3 mt-4 text-xs font-medium text-white rounded-full  bg-customGold'>
                  PUBLISH TRIBUTE</button>
              </form>
            </div> 
          </div>
    }
    <div
      className="relative h-auto pt-20 md:h-screen "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >

      <div className="relative flex flex-col items-center h-full px-6 lg:flex-row sm:items-end isolate lg:px-8">
        <div className="max-w-2xl text-center md:mb-24">
          <h1 className="text-4xl font-bold tracking-tight text-customBrown sm:text-6xl">
            Tribute to
          </h1>
          <p className="font-serif text-lg leading-8 text-customBrown">PHARM. DEACON</p>
          <h1 className="font-serif text-3xl tracking-tight font-extralight text-customBrown sm:text-6xl">
            EMMANUEL OKORAFOR
          </h1>
          <p className="font-serif text-xs text-customBrown">
            16 JUNE 1957 - 15 JUNE 2024</p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <a
              href="#"
              onClick={()=>{setModalOpen(true)}}
              className="px-4 py-3 text-sm font-light text-white shadow-sm bg-customGold hover:bg-hoverColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ borderRadius: "20px" }}
            >
              SEND YOUR TRIBUTE
            </a>
          </div>
        </div>
        <div className="max-w-lg mt-6 lg:mt-0">
          <img src={flower} className="absolute top-30 right-5 lg:right-28 w-8/10 lg:w-1/2 -z-10" />
          <img src={baba} alt="Background" className="object-cover w-full h-full " />
        </div>
      </div>
    </div>
  </>
  );
};

export default Hero;
