import Image from "next/image";
import React from "react";

interface CardProps {
  link: string;
  title: string;
  price: string;
  classname?: string;
}

const Card: React.FC<CardProps> = ({ link, title, price, classname }) => {
  return (
    <div
      className={`border-[11px] p-8 mx-2 border-[#FFB703] rounded-[43px] flex flex-col flex-wrap align-middle ${classname} `}
      style={{
        background: "linear-gradient(to bottom, #023047 43%, #219EBC 57%)",
      }}
    >
      <Image
        src={link}
        alt="Card Image"
        width={300}
        height={350}
        className="rounded-t-lg mb-4 h-[400px] w-[400px] object-cover"
      />
      <div className="text-white text-center leading-tight tracking-[0.05em] font-[800] font-[prompt]">
        {title}
      </div>
      <div className="text-white text-center leading-tight tracking-[0.05em] font-[300] font-inter">
        {price}
      </div>
    </div>
  );
};

export default Card;
