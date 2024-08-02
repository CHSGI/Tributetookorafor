import bgImage from '../assets/img/bg.png';

const Hero = () => {
  return (
    <div className="relative h-screen" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}>
      {/* Overlay */}

      <div className="relative flex items-center justify-center h-full px-6 isolate lg:px-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-customBrown sm:text-6xl">
            Tribute to 
          </h1>
          <p className='text-customBrown leading-8 text-lg'>PHARM. DEACON</p>
          <h1 className="text-4xl tracking-tight text-customBrown sm:text-6xl">
          EMMANUEL OKORAFOR
          </h1>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <a
              href="#"
              className="px-4 py-3 text-sm font-semibold text-white bg-customGold shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              style={{ borderRadius: '5px' }}
            >
              SEND YOUR TRIBUTE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
