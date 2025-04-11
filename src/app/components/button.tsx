import React from "react";

interface ButtonProps {
  content: string;
  classname?: string;
}

const Button: React.FC<ButtonProps> = ({ content, classname }) => {
  return (
    <div
      className={`bg-[#FFA500] text-black px-4 border-[3px] rounded-lg text-center font-inter border-black ${classname}`}
    >
      {content}
    </div>
  );
};

export default Button;
