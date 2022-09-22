import React, { useState } from "react";

import Step from "./Step";
import Preview from "./Preview";
import validate from "../helpers/validate";

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    stepOne: {
      firstName: {
        value: "",
        required: true,
        type: "input",
        subtitle: "First name",
        placeholder: "Joe",
      },
      lastName: {
        value: "",
        required: true,
        type: "input",
        subtitle: "Last name",
        placeholder: "Smith",
      },
      email: {
        value: "",
        email: true,
        type: "input",
        subtitle: "Email",
        placeholder: "joe@example.com",
      },
      password: {
        value: "",
        minLength: 6,
        type: "input:password",
        subtitle: "Password",
      },
    },
    stepTwo: {
      local: {
        value: "",
        required: true,
        type: "input",
        subtitle: "House no., Building, Apartment",
        placeholder: "A-250, Weston Road",
      },
      area: {
        value: "",
        required: true,
        type: "input",
        subtitle: "Area, Street, Sector, Village",
        placeholder: "Industria Nagar",
      },
      landmark: {
        value: "",
        required: true,
        type: "input",
        subtitle: "Landmark",
        placeholder: "opposite AIIMS",
      },
      city: {
        value: "",
        required: true,
        type: "input",
        subtitle: "City",
        placeholder: "Delhi",
      },
      pincode: {
        value: "",
        required: true,
        type: "input",
        subtitle: "Pincode",
        placeholder: "123456",
      },
    },
    stepThree: {
      nationality: {
        value: "",
        subtitle: "Select Nationality",
        required: true,
        type: "select",
        choices: [
          { value: "", label: "Not Selected" },
          { value: "india", label: "India" },
          { value: "china", label: "China" },
          { value: "russia", label: "Russia" },
        ],
      },
      accountno: {
        value: "",
        required: true,
        type: "input",
        subtitle: "Account Number",
        placeholder: "1234567XXX",
        minLength: 10,
      },
      CVV: {
        value: "",
        required: true,
        type: "input:password",
        subtitle: "cvv",
        minLength: 3,
      },
    },
  });
  const [errors, setErrors] = useState({});

  const changeHandler = (step, e) => {
    e.persist();

    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [e.target.name]: {
          ...prev[step][e.target.name],
          value: e.target.value,
        },
      },
    }));
  };

  const fileChangeHandler = (name, file, step) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [name]: {
          ...prev[step][name],
          value: file,
          fileName: file.name ? file.name : "No file chosen",
        },
      },
    }));
  };

  const stepChangeHandler = (values, e) => {
    e.preventDefault();
    const newErrors = validate(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setStep(step + 1);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    window.alert("saved");
  };

  return (
    <form
      className="h-4/5 my-auto flex flex-col justify-center"
      onSubmit={submitHandler}
    >
      <div className="my-4 text-lg font-medium text-center">
        {step === 1
          ? "Enter Details"
          : step === 2
          ? "Enter Address"
          : "Enter Payment Details"}
      </div>
      {step === 1 && (
        <Step
          data={formData.stepOne}
          onChange={changeHandler}
          onStepChange={stepChangeHandler}
          errors={errors}
          stepKey="stepOne"
          step={1}
        />
      )}
      {step === 2 && (
        <Step
          data={formData.stepTwo}
          onChange={changeHandler}
          onStepChange={stepChangeHandler}
          errors={errors}
          stepKey="stepTwo"
          onPrevStep={(step) => setStep(step)}
          step={2}
        />
      )}
      {step === 3 && (
        <Step
          data={formData.stepThree}
          onChange={changeHandler}
          onStepChange={stepChangeHandler}
          onFileChange={fileChangeHandler}
          errors={errors}
          stepKey="stepThree"
          onPrevStep={(step) => setStep(step)}
          step={3}
        />
      )}
      {step === 4 && (
        <Preview
          onPrevStep={() => setStep(step - 1)}
          data={[
            { label: "First name", value: formData.stepOne.firstName.value },
            { label: "Last name", value: formData.stepOne.lastName.value },
            { label: "Email", value: formData.stepOne.email.value },
            { label: "Password", value: formData.stepOne.password.value },
            { label: "Local", value: formData.stepTwo.local.value },
            { label: "Area", value: formData.stepTwo.area.value },
            { label: "City", value: formData.stepTwo.city.value },
            { label: "Pincode", value: formData.stepTwo.pincode.value },
            { label: "Gender", value: formData.stepThree.nationality.value },
          ]}
        />
      )}
    </form>
  );
};

export default Form;
