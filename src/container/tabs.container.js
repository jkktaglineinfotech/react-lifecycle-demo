import { useEffect, useState } from "react";
import { apiEndPoints, tabsData } from "../description/tabs.description";
import { getDataFromAPI } from "../api/tabApis";
import { useDispatch } from "react-redux";
import {
  startLoading,
  stopLoadingSuccess,
} from "../redux/actions/loadingAction";
import { useSearchParams } from "react-router-dom";

export const tabsContainer = (props) => {
  const dispatch = useDispatch();
  const [lastVisitedTab, setLastVisitedTab] = useState(
    localStorage.getItem("lastVisitedTab") || "Tab 1"
  );
  useEffect(() => {
    if (props) {
      console.log("Propss", props);

      //check the url params
      switch (props) {
        case "Tab1":
          localStorage.setItem("lastVisitedTab", "Tab 1");
          setLastVisitedTab("Tab 1");
          break;

        case "Tab2":
          localStorage.setItem("lastVisitedTab", "Tab 2");
          setLastVisitedTab("Tab 2");
          break;

        case "Tab3":
          localStorage.setItem("lastVisitedTab", "Tab 3");
          setLastVisitedTab("Tab 3");
          break;

        case "Tab4":
          localStorage.setItem("lastVisitedTab", "Tab 4");
          setLastVisitedTab("Tab 4");
          break;

        default:
          localStorage.setItem("lastVisitedTab", "Tab 1");
          setLastVisitedTab("Tab 1");
          break;
      }
    }
  }, []);

  // console.log(tabParams, "tabParams");

  const onChangeTab = async (item, tabEvent) => {
    dispatch(startLoading());
    localStorage.setItem("lastVisitedTab", tabEvent);
    setLastVisitedTab(tabEvent);
    const currentAPIEndPoint = apiEndPoints.filter(
      ({ api }) => api === item.api
    );
    const data = await getDataFromAPI(currentAPIEndPoint[0].endPoint);
    console.log("API Data", data);
    dispatch(stopLoadingSuccess());
  };

  return {
    tabsData,
    onChangeTab,
    lastVisitedTab,
    setLastVisitedTab,
  };
};
