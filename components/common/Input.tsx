import React from "react";

interface Props {
  placeholder?: string;
  type: string;
  name: string;
  register: any;
  error?: object;
  validation: object;
}

const Input: React.FC<Props> = ({
  placeholder,
  type,
  name,
  register,
  error,
  validation,
}) => {
  return (
    <>
      <input
        {...register(name, { ...validation })}
        type={type}
        name={name}
        className={`w-full h-12 px-2 text-gray-600 placeholder-gray-500 border rounded-lg focus-within:outline-none focus:outline-none ${
          error[name]?.type && "border-red-500 border"
        }`}
        placeholder={placeholder}
      />
      <span className="text-sm text-red-500">
        {error[name] && error[name]?.message}
      </span>
    </>
  );
};

export default Input;
