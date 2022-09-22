import React from "react";

const Input = ({
  type = "text",
  subtitle,
  placeholder,
  name,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="my-3 w-3/4 mx-auto">
      {subtitle}
      <input
        className={`border-2 w-full ${
          error ? "border-red-400" : "border-black"
        }`}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      <div className="text-red-500 h-4 w-full">{error}</div>
    </div>
  );
};

export default Input;
