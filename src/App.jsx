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
  const editRowRef = useRef();
  const editRef = useRef();
  const saveRef = useRef();

  // console.log(tableHeaders);

  let isRowEditable = false;
  let editableRowIndex = 0;
  let editableNameValue = "";

  let eidtedRowIndex = [];

  const handleEditRow = (row) => {
    if (isRowEditable) return;
    console.log("handleEditRow", row, editableNameValue, editRowRef);
    console.log("isRowEditable", isRowEditable);
    editableRowIndex = row.id;
    editRef.current.disabled = true;
    editRef.current.id = row.id;
    isRowEditable = true;
    const inputElement = document.createElement("input");
    inputElement.value = row.first_name;
    inputElement.type = "text";
    inputElement.id = row.id;
    inputElement.addEventListener("change", handleOnChange);
    // inputElement.addEventListener("keydown", handleKeyDown);
    // editRowRef.current.innerHTML = "";
    // editRowRef.current.removeChild(editRowRef.current.children[0]);
    editRowRef.current.appendChild(inputElement);
    inputElement.focus;
    // editRef.current.innerHTML = "Save";
    console.log("Row Details", row.id, editableRowIndex);
    // if (row.id === editableRowIndex) {
    //   if (editableNameValue) {
    //     updatedLocalTableData = localTableData.map((data) =>
    //       data.id === row.id ? { ...data, first_name: editableNameValue } : data
    //     );
    //     console.log(updatedLocalTableData, "updatedLocalTableData");
    //     localTableData = updatedLocalTableData;
    //     localStorage.setItem(
    //       "tableData",
    //       JSON.stringify(updatedLocalTableData)
    //     );
    //   }

    //   isRowEditable = true;
    //   return;
    // }
    editableRowIndex = row.id;
    isRowEditable = false;
  };

  const handleKeyDown = (event) => {
    console.log("Enter Key Down", event.keyCode);
    if (event.keyCode === 13) {
      console.log("inputElement.value", editableNameValue);
    }
  };
  const handleOnChange = (event) => {
    const elementInput = document.getElementById("editablTextField");
    console.log("elementInput", elementInput);
    console.log("handleOnChange", event.target.value);
    editableNameValue = event.target.value;
    editRowRef.current;
    console.log("Save", editRowRef.current.children[0].value, editableRowIndex);
    if (!event.target.value.trim()) return;
    updatedLocalTableData = localTableData.map((data) =>
      data.id === editableRowIndex
        ? { ...data, first_name: editableNameValue }
        : data
    );
    console.log(updatedLocalTableData, "updatedLocalTableData");
    localStorage.setItem("tableData", JSON.stringify(updatedLocalTableData));
    isRowEditable = true;

    // editableNameValue = target.value;
  };

  const hanleSaveRow = (row) => {
    console.log("Save", editRowRef.current.children[1]);
    isRowEditable = false;
  };

  console.log(editRowRef, "editRowRef");
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
                <td ref={editRowRef}>{row.first_name}</td>
                <td>{row.last_name}</td>
                <td>
                  <div style={{ gap: "2px" }}>
                    <button onClick={() => handleEditRow(row)} ref={editRef}>
                      Edit
                    </button>
                    {/* 
                    <button onClick={() => hanleSaveRow(row)} ref={saveRef}>
                      Save
                    </button> */}
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

/**
 *  {isRowEditable && editableRowIndex === row.id ? (
                  <input
                    ref={firstNameRef}
                    type="text"
                    name="first_name"
                    value={editableNameValue || ""}
                    onChange={handleOnChange}
                  />
                ) : 
 */
