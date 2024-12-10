import React from "react";
interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button__Dark: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button
        className={`px-9 py-4 rounded-lg border text-lg text-white bg-[#0B7A38] font-semibold hover:bg-opacity-90 transition duration-300`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button__Dark;
