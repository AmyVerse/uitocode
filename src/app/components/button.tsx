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
      className={`bg-orange-400 flex justify-center items-center text-black font-bold px-6 py-2 rounded-full shadow-md ${classname}`}
    >
      {content}
    </button>
  );
};

export default Button;
