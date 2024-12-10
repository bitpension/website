import React from "react";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


const Button_Yellow: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button
        className="px-6 py-2 text-transparent bg-clip-text font-semibold text-lg border border-transparent bg-gradient-to-r from-[#FECA00] to-[#D19228] hover:opacity-80
                hover:from-[#D19228] hover:to-[#FECA00] transition duration-300 rounded-full"
        style={{
          borderImage: "linear-gradient(to right, #FECA00, #D19228) 1",
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button_Yellow;