import Image from "next/image";
import Navbar from "./components/Navbar";
import Button from "./components/button";
import Footer from "./components/footer";
import Slide from "./components/slide";
import Slide2 from "./components/slide2";
import SpeedSection from "./components/speedsection";

export default function Home() {
  return (
    <div className="relative font-[prompt] overflow-hidden">
      {/* Hero Section */}
      <section className="flex py-9 px-4 md:px-6 bg-[url('/bg.webp')] md:bg-[url('/bgalt.jpg')] bg-cover object-left bg-center bg-no-repeat h-screen w-screen flex-col items-left">
        <Navbar />
        <div className="py-20 px-4 md:px-10 grid grid-rows-3 md:space-y-10">
          {/* Title */}
          <div className="text-5xl md:text-white md:text-8xl font-bold text-center md:text-left leading-tight">
            Hot Wheels Reimagined
          </div>
          <div className="md:hidden h-52"></div>
          {/* Subtitle */}
          <div className="text-md md:text-white text-black md:text-xl text-center md:text-left leading-relaxed">
            Unleash the power of precision-crafted speed machines.
            <br className="md:block hidden" /> Built for adrenaline, designed to
            stand out —<br className="md:block hidden" /> Hot Wheels isn't just
            a toy, it’s a way of life. <br className="md:block hidden" /> Grab
            yours and own the track.
          </div>

          {/* Buttons */}
          <div className="flex md:pt-14 grid-cols-2 h-fit items-center md:justify-start justify-evenly md:gap-32 max-md:-mt-8 md:w-fit">
            <button className="rounded-2xl text-sm p-5 md:text-xl border-4 border-amber-500 w-24 md:w-32 h-8 md:h-12 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300">
              Explore
            </button>
            <button className="rounded-2xl text-sm p-5 md:text-xl border-4 border-amber-500 w-24 md:w-32 h-8 md:h-12 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300">
              Customize
            </button>
          </div>
        </div>
      </section>

      {/* Main Section with Images and Buttons */}
      <section className="items-center flex px-4 md:px-7 py-9 bg-[url('/bg2.webp')] bg-cover bg-center bg-no-repeat h-fit pb-32 w-screen flex-col">
        {/* Top Title */}
        <h1 className="text-white text-3xl md:text-7xl font-extrabold my-8 md:my-16 drop-shadow-md text-center">
          Fuel Your Collection
        </h1>

        {/* Main Box with Rounded BG */}
        <div className="bg-black/30 w-full md:w-[1500px] h-auto md:h-120 rounded-[2rem] p-4 md:p-6 md:px-16 flex flex-col md:flex-row items-center justify-between shadow-2xl">
          {/* Left Image */}
          <Image
            src="/car1.webp"
            alt="Left Car"
            width={260}
            height={200}
            className="object-contain scale-100 md:scale-125"
          />

          {/* Center Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 mx-4 md:mx-8 my-6 md:my-10">
            <Button content="Collector" classname="w-full md:w-54 col-span-2" />
            <div className="hidden md:block col-span-1"></div>
            <Button content="Tracks" classname="w-full md:w-54 col-span-2" />
            <div className="hidden md:block col-span-1"></div>
            <Button
              content="Monster Trucks"
              classname="w-full md:w-66 col-span-2 md:col-span-3"
            />
            <div className="hidden md:block col-span-1"></div>
            <Button content="Remotes" classname="w-full md:w-54 col-span-2" />
            <div className="hidden md:block col-span-1"></div>
            <Button content="Big Foot" classname="w-full md:w-54 col-span-2" />
          </div>

          {/* Right Image */}
          <Image
            src="/car2.webp"
            alt="Right Car"
            width={260}
            height={200}
            className="object-contain scale-100 md:scale-125"
          />
        </div>

        {/* Bottom Text */}
        <p className="text-orange-400 font-extrabold italic text-xl md:text-3xl mt-4 md:mt-6 drop-shadow-sm text-center">
          Speed, Style & Thrill by Every Category!
        </p>
      </section>

      {/* Additional Sections */}
      <SpeedSection />
      <Slide />
      <Slide2 />
      <Footer />
    </div>
  );
}
