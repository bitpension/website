import React from "react";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button_Light: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className={`px-7 py-4 rounded-full border border-[#7C7C7C] text-lg text-[#7C7C7C] font-semibold hover:bg-opacity-90 transition duration-300`}
    >
      {text}
    </button>
  );
};
export default Button_Light;
