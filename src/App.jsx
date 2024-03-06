import React, { useMemo, useRef, useState } from "react";
import "./App.css";

let updatedLocalTableData;
let isEditable = false;
//let editableRows = [];
const App = () => {
  const defaultDataForTable = useMemo(
    () => [
      { id: 1, first_name: "Test User 1", last_name: "user test 1" },
      { id: 2, first_name: "Test User 2", last_name: "user test 2" },
      { id: 3, first_name: "Test User 3", last_name: "user test 3" },
      { id: 4, first_name: "Test User 4", last_name: "user test 4" },
      { id: 5, first_name: "Test User 5", last_name: "user test 5" },
      { id: 6, first_name: "Test User 6", last_name: "user test 6" },
      { id: 7, first_name: "Test User 7", last_name: "user test 7" },
      { id: 8, first_name: "Test User 8", last_name: "user test 8" },
      { id: 9, first_name: "Test User 9", last_name: "user test 9" },
      { id: 10, first_name: "Test User 10", last_name: "user test 10" },
    ],
    []
  );
  // localStorage.setItem("tableData", JSON.stringify(defaultDataForTable));

  let localTableData =
    JSON.parse(localStorage.getItem("tableData")) || defaultDataForTable;

  console.log("localTableData", localTableData);

  const tableHeaders = Object.keys(localTableData[0]);
  const editRowRef = useRef([]);
  const editRef = useRef([]);
  const saveRef = useRef([]);
  // console.log(tableHeaders);

  let isRowEditable = false;
  let editableRowIndex = 0;
  let editableNameValue = "";
  let currentRefIndex = -1;

  const addToEditRowRefs = (el) => {
    if (el && !editRowRef.current.includes(el)) {
      editRowRef.current.push(el);
    }
  };

  const addToEditRefs = (el) => {
    if (el && !editRef.current.includes(el)) {
      editRef.current.push(el);
    }
  };

  const addToCancelRefs = (el) => {
    if (el && !saveRef.current.includes(el)) {
      saveRef.current.push(el);
    }
  };

  const handleEditRow = (row, index) => {
    //disable button if already editing one row and not saved
    for (let idx = 0; idx < localTableData.length; idx++) {
      if (editRef.current[idx].disabled == true) return;
    }

    currentRefIndex = index;
    if (isRowEditable) return;
    // console.log(
    //   "handleEditRow",
    //   row,
    //   editableNameValue,
    //   editRowRef.current[index]
    // );
    // console.log("isRowEditable", isRowEditable);
    console.log(
      editRowRef.current[index].innerHTML,
      "editRowRef.current[index]"
    );
    editableRowIndex = row.id;
    editRef.current[index].disabled = true;
    editRef.current[index].id = row.id;
    isRowEditable = true;
    const inputElement = document.createElement("input");
    inputElement.value = editRowRef.current[index].innerHTML;
    inputElement.type = "text";
    inputElement.id = row.id;
    inputElement.addEventListener("change", handleOnChange);
    // inputElement.addEventListener("keydown", handleKeyDown);
    // editRowRef.current.innerHTML = "";
    // editRowRef.current.removeChild(editRowRef.current.children[0]);
    // console.log("openinputbox", editRowRef.current[currentRefIndex]);
    editRowRef.current[index].appendChild(inputElement);
    inputElement.focus;
    // editRef.current.innerHTML = "Save";
    // console.log("Row Details", row.id, editableRowIndex);
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
    isRowEditable = true;

    console.log(currentRefIndex, "currentRefIndex");
    const elementInput = document.getElementById("editablTextField");
    console.log("elementInput", elementInput);
    console.log("handleOnChange", event.target.value);
    editableNameValue = event.target.value;
    editRowRef.current[currentRefIndex];
    console.log(
      "Save",
      editRowRef.current[currentRefIndex].children[0],
      editableRowIndex
    );

    console.log(
      "Before Remove",
      editRowRef.current[currentRefIndex],
      editRowRef.current[currentRefIndex].children[0]
    );

    if (!editRowRef.current[currentRefIndex].children[0]) return;
    //remove children
    editRowRef.current[currentRefIndex].removeChild(
      editRowRef.current[currentRefIndex].children[0]
    );

    if (!event.target.value.trim()) {
      console.log("No Change");
      editRef.current[currentRefIndex].disabled = false;
      isRowEditable = false;

      return;
    }

    console.log(
      "editRowRef.current[currentRefIndex]",
      editRowRef.current[currentRefIndex].innerHTML
    );

    //update the value of table
    editRowRef.current[currentRefIndex].innerHTML = event.target.value;
    //set button to enable
    editRef.current[currentRefIndex].disabled = false;
    isRowEditable = false;

    if (editableRowIndex === -1) return;
    //save data in local storege on enter
    updatedLocalTableData = localTableData.map((data) =>
      data.id === editableRowIndex
        ? { ...data, first_name: editableNameValue }
        : data
    );

    // console.log(updatedLocalTableData, "updatedLocalTableData");

    //save data in localstorage
    localStorage.setItem("tableData", JSON.stringify(updatedLocalTableData));
    localTableData = JSON.parse(localStorage.getItem("tableData"));
    editableRowIndex = -1;
    editableNameValue = "";

    // editableNameValue = target.value;
  };

  const hanleCancelRow = (row, index) => {
    if (!editRowRef.current[currentRefIndex].children[0]) return;

    console.log("HandleCancel", editRowRef.current[currentRefIndex]);
    editRef.current[currentRefIndex].disabled = false;
    isRowEditable = false;
    editRowRef.current[currentRefIndex].removeChild(
      editRowRef.current[currentRefIndex].children[0]
    );
    editableRowIndex = -1;
    editableNameValue = "";
  };

  const handleSaveRow = (row, index) => {
    //
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
            {localTableData.map((row, index) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                {/*                <td ref={(el) => (editRowRef.current[index] = el || null)}> */}
                <td ref={addToEditRowRefs}>{row.first_name}</td>
                <td>{row.last_name}</td>
                <td>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <button
                      onClick={() => handleEditRow(row, index)}
                      ref={addToEditRefs}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => hanleCancelRow(row, index)}
                      ref={addToCancelRefs}
                    >
                      Cancel
                    </button>

                    <button onClick={() => handleSaveRow(row, index)}>
                      Save
                    </button>
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
