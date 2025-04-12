import React from "react";
import Image from "next/image";

interface CardProps {
  link: string;
  title: string;
  content: string;
  classname?: string;
}

const Card2: React.FC<CardProps> = ({ link, title, content, classname }) => {
  return (
    <div
      className={`hover:scale-95 transition-all duration-150 cursor-pointer bg-white shadow-lg flex flex-col rounded-3xl overflow-hidden ${classname}`}
    >
      {/* Image Section */}
      <Image
        src={link}
        width={400}
        height={450}
        alt="Card Image"
        className="object-cover md:w-[400px] md:h-[450px]"
      />

      {/* Gradient Text Content Section */}
      <div className="p-4 bg-gradient-to-r from-[#FFB703] to-[#FFE300]">
        <div className="font-[prompt] font-[400] text-[24px] leading-tight tracking-[0.05em]   text-white">
          {title}
        </div>
        <div className="font-[prompt] font-[400] text-[14px] leading-tight tracking-[0.05em] text-white mt-1">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Card2;
