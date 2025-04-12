import Card from "./card";

export default function Slide() {
  return (
    <div
      style={{
        backgroundImage: "url('/bg4.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "900px",
        height: "auto",
        width: "100vw",
      }}
      className="flex flex-col font-[prompt] bg-gradient-to-r from-[#FFFFFF] to-[#000000] p-4 md:p-8 items-center"
    >
      {/* Title */}
      <div className="text-white italic font-[700] pt-6 text-4xl md:text-[4rem] text-center">
        Own the whole Lineup
      </div>

      {/* Cards Section */}
      <div className="px-4 md:px-16 py-8 flex flex-col md:flex-row gap-8 items-center">
        <Card
          link="/hotwheels.webp"
          title="5-Pack of Die-Cast Toy Cars"
          price="Rs. 599"
          classname="mt-8"
        />
        <Card
          link="/hotwheels2.webp"
          title="1:64 Scale Vehicles"
          price="Rs. 799"
          classname="mt-8"
        />
        <Card
          link="/hotwheels3.webp"
          title="Hot Wheels action Dual Looping"
          price="Rs. 599"
          classname="mt-8"
        />
      </div>
    </div>
  );
}
