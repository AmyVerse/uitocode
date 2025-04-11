import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <section className="flex px-7 py-9 bg-[url('/bg.jpg')] bg-cover bg-no-repeat h-screen w-screen flex-col items-left">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="font-[prompt] py-20 px-10 grid grid-rows-3 space-y-8">
          <div className="text-8xl font-bold">Hot Wheels Reimagined</div>
          <div className="text-xl">
            Unleash the power of precision-crafted speed machines.
            <br /> Built for adrenaline, designed to stand out — Hot Wheels
            <br /> isn't just a toy, it’s a way of life. Grab yours and own the
            <br /> track.
          </div>
          <div>Hot Wheels Reimagined</div>
        </div>
      </section>
      <section className="flex px-7 py-9 bg-[url('/bg.jpg')] bg-cover bg-no-repeat h-screen w-screen flex-col items-left"></section>
    </div>
  );
}
