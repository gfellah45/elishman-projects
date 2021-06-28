import React from "react";

const Button: React.FC = ({ children }) => {
  return (
    <button className="w-full h-12 text-lg text-white rounded-lg shadow-md bg-base hover:opacity-75">
      {children}
    </button>
  );
};

export default Button;
