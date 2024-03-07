import React from "react";
import CommonTabs from "../shared/CommonTabs";
import { tabsContainer } from "../container/tabs.container";

const Tabs = () => {
  const { tabsData, onChangeTab } = tabsContainer();
  console.log(tabsData.length, "tabsData.length");
  return (
    <div className="mt-5">
      {tabsData.length ? (
        <CommonTabs data={tabsData} onChange={onChangeTab} />
      ) : (
        <h1>No Data</h1>
      )}
    </div>
  );
};

export default Tabs;
