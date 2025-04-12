import React from "react";
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
      className="flex flex-col font-[prompt] bg-gradient-to-r from-[#FFFFFF] to-[#000000] p-8 items-center"
    >
      <div className="text-white italic font-[700] text-[4rem]">
        Own the whole Lineup
      </div>
      <div className="px-16 py-8 flex flex-row gap-8">
        <Card
          link="/hotwheels.webp"
          title="5-Pack of Die-Cast Toy Cars "
          price="Rs. 599"
          classname="mt-8"
        />
        <Card
          link="/hotwheels2.webp"
          title="1:64 Scale Vehicles "
          price="Rs. 799"
          classname="mt-8"
        />
        <Card
          link="/hotwheels3.webp"
          title="Hot Wheels action Dual Looping "
          price="Rs. 599"
          classname="mt-8"
        />
      </div>
    </div>
  );
}
