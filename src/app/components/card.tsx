import React from "react";
import Image from "next/image";

interface CardProps {
  link: string;
  title: string;
  price: string;
  classname?: string;
}

const Card: React.FC<CardProps> = ({ link, title, price, classname }) => {
  return (
    <div
      className={`border-[13px] p-8 border-[#FFB073] rounded-lg flex flex-col flex-wrap align-middle ${classname} `}
      style={{
        background: "linear-gradient(to bottom, #023047 43%, #219EBC 57%)",
      }}
    >
      <Image
        src={link}
        width={200}
        height={200}
        alt="Card Image"
        className="rounded-t-lg h-3/5 w-full object-cover"
      />
      <div className="text-white leading-tight tracking-[0.05em] font-[800] font-prompt">
        {title}
      </div>
      <div className="text-white leading-tight tracking-[0.05em] font-[300] font-inter">
        {price}
      </div>
    </div>
  );
};

export default Card;
