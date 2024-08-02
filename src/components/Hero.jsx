import bgImage from "../assets/img/bg.png";
import baba from "../assets/img/baba.png"
import flower from "../assets/img/flower.png"
import { useState } from "react";

const Hero = () => {
  
  const [modalOpen, setModalOpen] = useState(false);
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
    <div
      className="relative h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >

      <div className="relative flex items-center sm:items-end h-full px-6 isolate lg:px-8">
        <div className="max-w-2xl text-center md:mb-24">
          <h1 className="text-4xl font-bold tracking-tight text-customBrown sm:text-6xl">
            Tribute to
          </h1>
          <p className="text-customBrown font-serif leading-8 text-lg">PHARM. DEACON</p>
          <h1 className="text-3xl font-serif font-extralight tracking-tight text-customBrown sm:text-6xl">
            EMMANUEL OKORAFOR
          </h1>
          <p className="text-xs text-customBrown font-serif">
            16 JUNE 1957 - 15 JUNE 2024</p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <a
              href="#"
              onClick={()=>{setModalOpen(true)}}
              className="px-4 py-3 text-sm font-light text-white bg-customGold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ borderRadius: "20px" }}
            >
              SEND YOUR TRIBUTE
            </a>
          </div>
        </div>
        <div className="max-w-lg">
          <img src={flower} className="absolute top-30 right-28 w-1/2 -z-10" />
          <img src={baba} alt="Background" className="object-cover w-full h-full " />
        </div>
      </div>
    </div>
  </>
  );
};

export default Hero;
