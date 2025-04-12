import React from "react";

interface ButtonProps {
  content: string;
  classname?: string;
}

const Button: React.FC<ButtonProps> = ({ content, classname }) => {
  return (
    <div
      className={`bg-orange-400 flex justify-center items-center text-black font-bold px-6 py-2 rounded-full shadow-md ${classname}`}
    >
      {content}
    </div>
  );
};

export default Button;
