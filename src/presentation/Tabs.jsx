import React from "react";
import CommonTabs from "../shared/CommonTabs";
import { tabsContainer } from "../container/tabs.container";

const Tabs = () => {
  const { tabsData, onChangeTab } = tabsContainer();
  return (
    <div className="mt-5">
      <CommonTabs data={tabsData} onChange={onChangeTab} />
    </div>
  );
};

export default Tabs;
