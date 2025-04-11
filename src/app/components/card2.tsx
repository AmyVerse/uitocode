import React from "react";
import Image from "next/image";

interface CardProps {
  link: string;
  title: string;
  content: string;
  classname?: string;
}

const Card: React.FC<CardProps> = ({ link, title, content, classname }) => {
  return (
    <div
      className={`max-h-[30vh] max-w-[30vw] bg-gradient-radial from-[#FFB703] to-[#FFE300]  flex flex-col justify-start ${classname}`}
    >
      <Image
        src={link}
        alt="Card Image"
        className="rounded-t-lg h-[665px] w-[590px] object-cover"
      />
      <div className="p-4 ">
        <div className="font-prompt font-[400] text-[24px] leading-tight tracking-[0.05em] text-black">
          {title}
        </div>
        <div className="font-prompt font-[400] text-[14px] leading-tight tracking-[0.05em] text-black">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Card;
