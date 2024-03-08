import React, { useRef, useState } from "react";

const CommonCheckBox = ({ title, value, onChange }) => {
  const checkBoxRef = useRef();
  console.log("Common Check Box", title, value);
  const handleOnValueChange = (event) => {
    console.log("handleOnValueChange", event, title);
    console.log(
      "checkInputElement",
      checkBoxRef.current,
      checkBoxRef.current?.checked
    );
    // if (checkBoxRef.current?.checked) {
    // }
    onChange(title, event, checkBoxRef.current?.checked);
  };

  return (
    <div className="d-flex flex-row">
      {Object.values(value).map((item, index) => (
        <div key={index}>
          <input
            ref={checkBoxRef}
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={() => handleOnValueChange(item)}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {item?.toString()}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CommonCheckBox;
