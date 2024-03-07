import React, { useState } from "react";
import CommonTabs from "../shared/CommonTabs";
import { tabsContainer } from "../container/tabs.container";
import { useSearchParams } from "react-router-dom";

const Tabs = ({ tabParams }) => {
  const { tabsData, onChangeTab, lastVisitedTab, setLastVisitedTab } =
    tabsContainer(tabParams);
  // const urlParams = new URLSearchParams(window.location.search);
  // const tabParams = urlParams.get("tab");

  // console.log("tabParams", tabParams);

  return (
    <div className="mt-5">
      {tabsData.length ? (
        <CommonTabs
          {...{
            data: tabsData,
            onChange: onChangeTab,
            tabParams,
            lastVisitedTab,
            setLastVisitedTab,
          }}
        />
      ) : (
        <h1>No Data</h1>
      )}
    </div>
  );
};

export default Tabs;
