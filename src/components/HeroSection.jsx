// HeroSection Component
import HeroDesktop from "../assets/images/image-web-3-desktop.jpg"
import HeroMobile from "../assets/images/image-web-3-mobile.jpg"

const HeroSection = () => {
    return (
      <section className="md:mt-10">
        <img src={HeroDesktop} alt="Hero" className=" hidden md:flex  w-full rounded-lg " />
        <img src={HeroMobile} alt="Hero" className="md:hidden w-full rounded-lg" />
        <div className="flex items-center justify-between  gap-20 mt-6">

        <div className="w-3/5">
             <h2 className="text-5xl font-bold">The Bright Future of Web 3.0?</h2>

        </div>
        <div className="w-3/5 ">

            <p className="text-gray-700 mt-2">
            We dive into the next evolution of the web that claims to put the power of the
            platforms back into the hands of the people. But is it really fulfilling its promise?
            </p>
            <button className="bg-red-500 text-white px-6 py-2 mt-6  rounded uppercase font-bold">Read More</button>
        </div>
        </div>
      </section>
    );
  };

  export default HeroSection