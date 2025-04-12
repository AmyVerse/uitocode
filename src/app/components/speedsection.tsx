import Image from "next/image";

export default function SpeedSection() {
  return (
    <div className="relative items-center flex content-center justify-center px-7 py-9 bg-[url('/bg3.webp')] bg-cover grid-cols-3 h-90 w-full bg-no-repeat">
      {/* Left Car */}
      <Image
        src="/b2f.webp"
        alt="HotWheels Car Left"
        width={150}
        height={40}
        className="absolute left-10 top-8"
      ></Image>
      <Image
        src="/car4.webp"
        alt="HotWheels Car Left"
        width={600}
        height={40}
        className="absolute left-28 top-20"
      />

      {/* Main Text */}
      <p className="font-[prompt] text-center col-span-1 italic text-4xl md:text-7xl font-extrabold text-amber-400 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
        Where Speed
        <br /> Has No Limits
      </p>

      {/* Right Car */}
      <Image
        src="/car3.webp"
        alt="HotWheels Car Right"
        width={500}
        height={40}
        className="absolute right-36 top-1 scale-x-[-1]"
      />
    </div>
  );
}
