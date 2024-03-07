import React, { useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const CommonDropDown = ({
  data,
  onChange,
  tabParams,
  lastVisitedTab,
  setLastVisitedTab,
}) => {
  const selectItem = (eventKey) => {
    console.log("eventKey", eventKey);
    const currentSelect = data.filter((tabElem) => tabElem.name === eventKey);
    onChange(currentSelect[0], eventKey);
    setLastVisitedTab(eventKey);
  };

  useEffect(() => {
    const lastSavedData = data.filter(({ name }) => name === lastVisitedTab);
    console.log("data", lastSavedData, lastVisitedTab);
    const getDataFromParams = data.filter(
      ({ name }) => name === tabParams?.replace(/%20/g, "")
    );
    console.log("getDataFromParams", getDataFromParams);
    if (getDataFromParams.length === 1) {
      // localStorage.setItem("lastVisitedTab", getDataFromParams[0].name);
      setLastVisitedTab(getDataFromParams[0].name);
      console.log("setLastVisitedTab", getDataFromParams[0].name);
      onChange(
        getDataFromParams.length === 1 ? getDataFromParams[0] : data[0],
        getDataFromParams.length === 1
          ? getDataFromParams[0].name
          : data[0].name
      );
      return;
    }
    if (lastSavedData.length === 1) {
      // console.log("lastSavedData", lastSavedData.length);
      onChange(
        lastSavedData.length === 1 ? lastSavedData[0] : data[0],
        lastSavedData.length === 1 ? lastSavedData[0].name : data[0].name
      );
      return;
    }
  }, [tabParams]);
  console.log("tabParamsInDropDown", tabParams);
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
      }}
    >
      <DropdownButton
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
        id="dropdown-basic-button"
        title={lastVisitedTab}
        onSelect={selectItem}
      >
        {data?.map((elem) => {
          return (
            <Dropdown.Item eventKey={elem.name} key={elem.id}>
              {elem.name}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
};

export default CommonDropDown;
