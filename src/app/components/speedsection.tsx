import Image from "next/image";

export default function SpeedSection() {
  return (
    <div className="relative flex flex-col gap-4 md:flex-row items-center justify-center px-4 md:px-7 py-9 bg-[url('/bg3.webp')] bg-cover bg-center bg-no-repeat h-auto md:h-100 w-full">
      {/* Left Car */}
      <div className="relative lg:absolute lg:left-8 lg:top-6 xl:left-10 xl:top-8">
        <Image
          src="/b2f.webp"
          alt="HotWheels Car Left"
          width={150}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="relative -mb-8 pt-6 lg:absolute lg:left-20 lg:top-16 xl:left-28 xl:top-20">
        <Image
          src="/car4.webp"
          alt="HotWheels Car Left"
          width={600}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Text */}
      <p className="font-[prompt] text-center italic text-4xl lg:text-6xl xl:text-8xl font-extrabold text-amber-400 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] my-6 lg:my-4 xl:my-0">
        Where Speed
        <br /> Has No Limits
      </p>

      {/* Right Car */}
      <div className="relative lg:absolute lg:right-12 lg:top-2 xl:right-16 xl:top-1">
        <Image
          src="/car3.webp"
          alt="HotWheels Car Right"
          width={500}
          height={40}
          className="object-contain scale-x-[-1]"
        />
      </div>
    </div>
  );
}
