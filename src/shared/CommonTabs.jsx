import React, { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";

const CommonTabs = ({ data, onChange }) => {
  const handleOnTabSelect = (tabEvent) => {
    console.log("tabEvent", tabEvent);
    const currentEvent = data.filter((tabElem) => tabElem.name === tabEvent);
    console.log("currentEvent", currentEvent[0]);
    onChange(currentEvent[0]);
  };

  useEffect(() => {
    onChange(data[0]);
  }, []);

  if (!data.length) return null;

  return (
    <Tabs
      id="justify-tab-example"
      className="mb-3"
      justify
      onSelect={handleOnTabSelect}
      defaultActiveKey={"Tab 1"}
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
