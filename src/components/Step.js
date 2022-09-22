import React, { Fragment } from "react";

import Input from "./Input";
import Select from "./Select";
import FileInput from "./FileInput";

const Step = ({
  data,
  onChange,
  onStepChange,
  errors,
  stepKey,
  step,
  onPrevStep,
}) => {
  let output = [];

  for (const [key, val] of Object.entries(data)) {
    if (val.type.split(":")[0] === "input") {
      output.push(
        <Input
          key={key}
          subtitle={val.subtitle}
          placeholder={val.placeholder}
          name={key}
          value={val.value}
          onChange={(e) => onChange(stepKey, e)}
          error={errors[key]}
          type={val.type.split(":")[1]}
        />
      );
    } else if (val.type === "select") {
      output.push(
        <Select
          key={key}
          name={key}
          subtitle={val.subtitle}
          value={val.value}
          onChange={(e) => onChange(stepKey, e)}
          error={errors[key]}
          choices={val.choices}
        />
      );
    }
  }

  return (
    <div className="flex flex-col w-3/4 mx-auto">
      {output}
      <div className="flex justify-around">
        {step > 1 && (
          <button
            type="button"
            className="bg-red-400 p-2 rounded-lg w-2/5"
            onClick={() => onPrevStep(step - 1)}
          >
            Go back
          </button>
        )}
        <button
          type="button"
          className="bg-green-500 p-2 rounded-lg w-2/5"
          onClick={(e) => onStepChange(data, e)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step;
