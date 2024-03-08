import React from "react";
import CommonCheckBox from "./CommonCheckBox";
import { head, uniq } from "lodash";
import { requiredFilterValues } from "../description/mainTable.description";

const CommonDataFilter = ({ data, onChange }) => {
  const tableHeaders = Object.keys(data?.[0]);
  if (!data) return null;

  console.log("Filter Headers", tableHeaders);

  //   let filterVal = {};
  //   tableHeaders.forEach((header) => {
  //     filterVal[header] = uniq(data[header], header);
  //     console.log("header", header);
  //   });

  let desired_output = (data) => {
    let unique_values = [];
    tableHeaders.forEach((header) => {
      console.log(requiredFilterValues, "requiredFilterValues");
      unique_values[header] = [
        ...new Set(data.map((element) => element[header])),
      ];
      //   unique_values.push({
      //     [header]: [...new Set(data.map((element) => element[header]))],
      //   });
    });
    return unique_values;
  };
  //   let uniqueName = uniq(data);
  let filterVal = desired_output(data);
  console.log("filterValesz", filterVal);

  return (
    <div>
      {" "}
      {tableHeaders?.map((header, index) => (
        <div key={index}>
          {requiredFilterValues.includes(header) && (
            <div className="">
              <h1 key={index}>{header}</h1>
              <div>
                <CommonCheckBox
                  key={index}
                  value={filterVal[header]}
                  title={header}
                  onChange={onChange}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommonDataFilter;
