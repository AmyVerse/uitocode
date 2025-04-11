import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <section className="relative items-center px-7 py-9 bg-[url('/bg2.webp')] bg-cover bg-no-repeat h-screen w-screen flex-col">
        <div className="text-4xl font-bold pb-16">Fuel Your Collection</div>
        <div className="grid grid-cols-3 justify-center items-center content-center rounded-xl h-80">
          <Image src={"/car1.webp"} width={200} height={20} alt="car1"></Image>
          <div></div>
          <Image src={"/car2.webp"} width={200} height={20} alt="car2"></Image>
        </div>
        <div className="pt-3 justify-center text-lg flex font-bold italic bg-gradient-to-b text-[#FFB600]">
          Speed, Style & Thrill by Every Category!
        </div>
      </section>
      <section className="relative items-center px-7 py-9 bg-[url('/bg3.webp')] bg-cover h-80 w-full bg-no-repeat flex-col"></section>
      <Footer />
    </div>
  );
}
