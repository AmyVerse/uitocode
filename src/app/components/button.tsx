import React from "react";

interface ButtonProps {
  content: string;
  classname?: string;
  onClick?: () => void; // Optional onClick handler
}

const Button: React.FC<ButtonProps> = ({ content, classname, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#ffa500] outline-2 outline-black flex justify-center items-center text-black font-semibold px-6 py-2 text-xl rounded-full shadow-md ${classname}`}
    >
      {content}
    </button>
  );
};

export default Button;
