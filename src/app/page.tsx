import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Slide from "./components/slide";
import Slide2 from "./components/slide2";
import Button from "./components/button";

export default function Home() {
  return (
    <div className="relative font-[prompt] overflow-hidden">
      <section className="flex  py-9 bg-[url('/bg.webp')] bg-cover bg-no-repeat h-screen w-screen flex-col items-left">
        <Navbar />
        <div className=" py-20 px-10 grid grid-rows-3 space-y-8">
          <div className="text-8xl font-bold">Hot Wheels Reimagined</div>
          <div className="text-xl">
            Unleash the power of precision-crafted speed machines.
            <br /> Built for adrenaline, designed to stand out — Hot Wheels
            <br /> isn't just a toy, it’s a way of life. Grab yours and own the
            <br /> track.
          </div>
          <div className="py-4 grid grid-cols-2 items-center justify-end gap-24 w-96">
            <div className="rounded-2xl text-xl border-4 border-amber-500 w-32 h-12 flex items-center justify-center">
              Explore
            </div>
            <div className="rounded-2xl text-xl border-4 border-amber-500 w-32 h-12 flex items-center justify-center">
              Customize
            </div>
          </div>
        </div>
      </section>

      {/* Main Section with Images and Buttons */}
      <section className="items-center flex px-7 py-9 bg-[url('/bg2.webp')] bg-cover bg-no-repeat h-screen w-screen flex-col">
        {/* Top Title */}
        <h1 className="text-white flex text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md">
          Fuel Your Collection
        </h1>

        {/* Main Box with Rounded BG */}
        <div className="bg-[#004f5c]/70 rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl shadow-2xl">
          {/* Left Image */}
          <div className="w-40 h-40 md:w-60 md:h-60 flex items-center justify-center overflow-hidden">
            <Image
              src="/car1.webp" // Replace with actual image path
              alt="Left Car"
              width={200}
              height={200}
              className="object-contain scale-125"
            />
          </div>

          {/* Center Buttons */}
          <div className="grid grid-cols-2 gap-8 mx-8 my-10 md:my-0">
            <Button content="Collector"></Button>
            <Button content="Tracks"></Button>
            <Button content="Monster Trucks"></Button>
            <Button content="Remotes"></Button>
            <Button content="Big Foot"></Button>
          </div>

          {/* Right Image */}
          <div className="w-40 h-40 md:w-60 md:h-60 flex items-center justify-center overflow-hidden">
            <Image
              src="/car2.webp" // Replace with actual image path
              alt="Right Car"
              width={200}
              height={200}
              className="object-contain scale-125"
            />
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-orange-400 font-extrabold italic text-xl md:text-2xl mt-6 drop-shadow-sm">
          Speed, Style & Thrill by Every Category!
        </p>
      </section>
      <section className="relative items-center px-7 py-9 bg-[url('/bg3.webp')] bg-cover h-80 w-full bg-no-repeat flex-col"></section>
      <Slide />
      <Slide2 />
      <Footer />
    </div>
  );
}
