import React from "react";

interface Props {
  placeholder?: string;
  type: string;
  name: string;
}

const Input: React.FC<Props> = ({ placeholder, type, name }) => {
  return (
    <input
      type={type}
      name={name}
      className="w-full h-12 px-2 text-gray-600 placeholder-gray-500 border rounded-lg focus-within:outline-none focus:outline-none"
      placeholder={placeholder}
    />
  );
};

export default Input;
