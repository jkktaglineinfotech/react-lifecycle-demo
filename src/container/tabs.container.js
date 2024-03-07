import { useState } from "react";
import { apiEndPoints, tabsData } from "../description/tabs.description";
import { getDataFromAPI } from "../api/tabApis";

export const tabsContainer = () => {
  // const [selectedTabData, setSelectedTabData] = useState({});
  // const [currentTab, setCurrentTab] = useState(null);

  const onChangeTab = async (item) => {
    const currentAPIEndPoint = apiEndPoints.filter(
      ({ api }) => api === item.api
    );
    const data = await getDataFromAPI(currentAPIEndPoint[0].endPoint);
    console.log("API Data", data);
  };
  return {
    tabsData,
    onChangeTab,
  };
};
