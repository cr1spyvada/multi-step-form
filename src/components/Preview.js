import React from "react";

const Preview = ({ data, onPrevStep }) => {
  return (
    <div className="my-3 w-3/4 mx-auto">
      <p className="text-xl">Your data</p>
      <div className="flex flex-col justify-center">
        <ul className="py-5 flex flex-col justify-center">
          {data.map((input, index) => (
            <li key={index} className="py-2 border flex justify-between">
              <strong className="">{input.label}:</strong>
              <div className="">{input.value}</div>
            </li>
          ))}
        </ul>
        <div className="flex justify-around">
          <button
            type="button"
            className="p-2 bg-red-400 w-1/3 rounded-lg"
            onClick={onPrevStep}
          >
            Go back
          </button>
          <button type="submit" className="p-2 bg-green-500 w-1/3 rounded-lg">
            Submit form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
