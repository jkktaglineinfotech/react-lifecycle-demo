import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";

const CommonCheckBox = ({ title, value, onChange }) => {
  const checkBoxRef = useRef();
  console.log("Common Check Box", title, value);
  const [filterValues, setFilterValues] = useState([]);
  const handleOnValueChange = (event) => {
    console.log("handleOnValueChange", event, title);
    console.log("checkInputElement", checkBoxRef.current?.checked);
    console.log("Object of filter values", Object.values(filterValues));
    if (checkBoxRef.current?.checked === true) {
      setFilterValues([
        ...filterValues,
        { searchTitle: event, searchValue: title },
      ]);
    } else {
      setFilterValues(
        filterValues.filter(
          (item) => item.searchValue !== event && item.searchTitle !== title
        )
      );
    }
    //onChange(filterValues);
    onChange(title, event, checkBoxRef.current.checked ? true : false);
    // if (checkBoxRef.current?.checked) {
    //   checkBoxRef.current?.checked = false
    // } else{
    //   checkBoxRef.current?.checked = true
    // }
  };
  useEffect(() => {
    console.log("CommonCheckBox", filterValues);
  }, [filterValues]);

  return (
    <div className="d-flex flex-row">
      {Object.values(value).map((item, index) => (
        <Form.Check // prettier-ignore
          type={"switch"}
          id={item?.toString()}
          label={item?.toString()}
          ref={checkBoxRef}
          onChange={() => handleOnValueChange(item)}
        />
      ))}
    </div>
  );
};

export default CommonCheckBox;

{
  /*  <div key={index}>
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
      </div>*/
}
