import Card from "./card2";

export default function Slide2() {
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
      className="flex flex-col bg-gradient-to-r from-[#FFFFFF] to-[#000000] p-4 pt-9 md:p-8 items-center"
    >
      {/* Title */}
      <div className="text-white font-prompt font-[700] text-4xl italic md:text-[4rem] text-center">
        Seasonal Offers & Games
      </div>

      {/* Cards Section */}
      <div className="px-4 md:px-16 py-8 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <Card
          title="Hot Wheels & Formula 1®"
          content="Learn More"
          link="/image.webp"
        />
        <Card
          title="Outrageous Event"
          content="Learn More"
          link="/image1.webp"
        />
      </div>
    </div>
  );
}
