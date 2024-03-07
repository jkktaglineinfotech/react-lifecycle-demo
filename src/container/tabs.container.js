import { useState } from "react";
import { apiEndPoints, tabsData } from "../description/tabs.description";
import { getDataFromAPI } from "../api/tabApis";
import { useDispatch } from "react-redux";
import {
  startLoading,
  stopLoadingSuccess,
} from "../redux/actions/loadingAction";

export const tabsContainer = () => {
  const dispatch = useDispatch();
  const onChangeTab = async (item) => {
    dispatch(startLoading());

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
  };
};
