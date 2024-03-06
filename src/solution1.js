import React, { useMemo, useRef, useState } from "react";
import "./App.css";

let updatedLocalTableData;
let isEditable = false;
//let editableRows = [];
const App = () => {
  const defaultDataForTable = useMemo(
    () => [
      { id: 1, first_name: "Test 1", last_name: "user 1" },
      { id: 2, first_name: "Test 2", last_name: "user 2" },
      { id: 3, first_name: "Test 3", last_name: "user 3" },
      { id: 4, first_name: "Test 4", last_name: "user 4" },
      { id: 5, first_name: "Test 5", last_name: "user 5" },
      { id: 6, first_name: "Test 6", last_name: "user 6" },
      { id: 7, first_name: "Test 7", last_name: "user 7" },
      { id: 8, first_name: "Test 8", last_name: "user 8" },
      { id: 9, first_name: "Test 9", last_name: "user 9" },
      { id: 10, first_name: "Test 10", last_name: "user 10" },
    ],
    []
  );
  // localStorage.setItem("tableData", JSON.stringify(defaultDataForTable));

  let localTableData =
    JSON.parse(localStorage.getItem("tableData")) || defaultDataForTable;

  const tableHeaders = Object.keys(localTableData[0]);
  const editButtonRef = useRef();
  const rowRef = useRef();
  const firstNameRef = useRef();

  // console.log(tableHeaders);
  const [isRowEditable, setIsRowEditable] = useState(false);
  const [editableRowIndex, setEditableRowIndex] = useState(null);
  const [editableNameValue, setEditableNameValue] = useState("");

  const handleEditRow = (row) => {
    console.log("row", row, editableNameValue);
    if (row.id === editableRowIndex) {
      updatedLocalTableData = localTableData.map((data) =>
        data.id === row.id ? { ...data, first_name: editableNameValue } : data
      );
      console.log(updatedLocalTableData, "updatedLocalTableData");
      localTableData = updatedLocalTableData;
      localStorage.setItem("tableData", JSON.stringify(updatedLocalTableData));
      setIsRowEditable(false);
      return;
    }
    setEditableRowIndex(row.id);
    setIsRowEditable(true);
    // if (editableRows.includes(row.id)) {
    //   return editableRows.filter((id) => id !== row.id);
    // } else {
    //   return [...editableRows, row.id];
    // }
  };

  // console.log("editableRows", isRowEditable);
  const handleOnChange = ({ target }) => {
    // console.log(target.value);
    setEditableNameValue(target.value);
  };
  return (
    <div className="App">
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              {tableHeaders?.map(
                (header, index) =>
                  header !== "Actions" && <th key={index}>{header}</th>
              )}
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {localTableData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                {isRowEditable && editableRowIndex === row.id ? (
                  <input
                    ref={firstNameRef}
                    type="text"
                    name="first_name"
                    value={editableNameValue || ""}
                    onChange={handleOnChange}
                  />
                ) : (
                  <td>{row.first_name}</td>
                )}
                <td>{row.last_name}</td>
                <td>
                  <div>
                    <button onClick={() => handleEditRow(row)}>Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
