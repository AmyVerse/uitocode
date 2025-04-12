import React from "react";
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
      className="flex flex-col bg-gradient-to-r from-[#FFFFFF] to-[#000000] p-8 items-start"
    >
      <div className="text-white font-prompt font-[700] text-[4rem]">
        Seasonal Offers & Games
      </div>
      <div className="px-56 py-8 flex flex-row gap-64">
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
