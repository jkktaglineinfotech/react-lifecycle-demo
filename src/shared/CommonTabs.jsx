import React, { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const CommonTabs = ({
  data,
  onChange,
  tabParams,
  lastVisitedTab,
  setLastVisitedTab,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOnTabSelect = (tabEvent) => {
    //clear params on change of tab
    if (tabParams) {
      searchParams.delete("tab");
      setSearchParams(searchParams);
    }
    console.log("tabEvent", tabEvent);
    const currentEvent = data.filter((tabElem) => tabElem.name === tabEvent);
    console.log("currentEvent", currentEvent[0]);

    onChange(currentEvent[0], tabEvent);
  };

  // console.log(tabParams, "tabParamss");

  useEffect(() => {
    const lastSavedData = data.filter(({ name }) => name === lastVisitedTab);
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
    } else {
      // console.log("lastSavedData", lastSavedData.length);
      onChange(
        lastSavedData.length === 1 ? lastSavedData[0] : data[0],
        lastSavedData.length === 1 ? lastSavedData[0].name : data[0].name
      );
    }
  }, [lastVisitedTab]);

  useEffect(() => {
    console.log("lastVisitedTab", lastVisitedTab);
  });

  if (!data.length) return null;

  return (
    <>
      <Tabs
        id="justify-tab-example"
        className="mb-3"
        justify
        onSelect={handleOnTabSelect}
        defaultActiveKey={lastVisitedTab}
        activeKey={lastVisitedTab}
      >
        {data?.map((el) => (
          <Tab
            key={el.id}
            eventKey={el.name}
            title={el.name}
            mountOnEnter={true}
          >
            {el.name}
          </Tab>
        ))}
      </Tabs>
    </>
  );
};

export default CommonTabs;
