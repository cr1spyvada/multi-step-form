import React from "react";

const Select = ({ name, subtitle, value, onChange, choices, error }) => {
  return (
    <div className="my-4 w-3/4 flex flex-col mx-auto">
      {subtitle}
      <select name={name} value={value} onChange={onChange}>
        {choices.map((choice, index) => (
          <option key={index} value={choice.value}>
            {choice.label}
          </option>
        ))}
      </select>
      <div className="w-full h-4 text-red-500">{error}</div>
    </div>
  );
};

export default Select;
