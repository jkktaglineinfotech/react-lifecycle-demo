import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

const CommonTabs = ({ data, onChange }) => {
  const handleOnTabSelect = (tabEvent) => {
    console.log("tabEvent", tabEvent);
    const currentEvent = data.filter((tabElem) => tabElem.name === tabEvent);
    console.log("currentEvent", currentEvent[0]);
    localStorage.setItem("lastVisitedTab", tabEvent);

    onChange(currentEvent[0]);
  };

  const lastVisitedTab = localStorage.getItem("lastVisitedTab");

  useEffect(() => {
    const lastSavedData = data.filter(({ name }) => name === lastVisitedTab);
    // console.log("lastSavedData", lastSavedData.length);
    onChange(lastSavedData.length === 1 ? lastSavedData[0] : data[0]);
  }, []);

  console.log("lastVisitedTab", lastVisitedTab);
  if (!data.length) return null;

  return (
    <Tabs
      id="justify-tab-example"
      className="mb-3"
      justify
      onSelect={handleOnTabSelect}
      defaultActiveKey={lastVisitedTab ? lastVisitedTab : "Tab 1"}
    >
      {data?.map((el) => (
        <Tab key={el.id} eventKey={el.name} title={el.name} mountOnEnter={true}>
          {el.name}
        </Tab>
      ))}
    </Tabs>
  );
};

export default CommonTabs;
