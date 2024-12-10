import React from "react";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


const Button_Clear: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className={`px-9 py-4 rounded-full border border-[#0B7A38] text-lg text-[#0B7A38] font-semibold hover:bg-opacity-90 transition duration-300`}
    >
      {text}
    </button>
  );
};
export default Button_Clear;