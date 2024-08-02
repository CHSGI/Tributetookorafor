import bgImage from "../assets/img/bg.png";
import baba from "../assets/img/baba.png"

const Hero = () => {
  return (
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
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <a
              href="#"
              className="px-4 py-3 text-sm font-light text-white bg-customGold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ borderRadius: "20px" }}
            >
              SEND YOUR TRIBUTE
            </a>
          </div>
        </div>
        <div className="max-w-lg">
          <img src={baba} alt="Background" className="object-cover w-full h-full " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
