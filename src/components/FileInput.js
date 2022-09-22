import React, { useRef } from "react";

const FileInput = ({ onChange, name, error, stepKey, fileName }) => {
  const fileInput = useRef();

  const openFilePicker = () => {
    fileInput.current.click();
  };

  const fileChangeHandler = (e) => {
    if (e.target.files[0]) {
      onChange(name, e.target.files[0], stepKey);
    } else {
      onChange(name, {}, stepKey);
    }
  };

  return (
    <div className="my-3 w-3/4 mx-auto">
      <input
        type="file"
        name={name}
        ref={fileInput}
        onChange={fileChangeHandler}
        className="is-hidden"
      />
      <div className="is-flex" style={{ alignItems: "center" }}>
        <button
          type="button"
          className="button is-info mr-3"
          onClick={openFilePicker}
        >
          Choose file
        </button>
        <p className="is-flex" style={{ alignItems: "center" }}>
          {fileName}
          {fileName !== "No file chosen" && (
            <button
              type="button"
              className="delete is-small ml-2"
              onClick={() => onChange(name, {}, stepKey)}
            ></button>
          )}
        </p>
      </div>
      <div className="w-full h-4 text-red-500">{error}</div>
    </div>
  );
};

export default FileInput;
