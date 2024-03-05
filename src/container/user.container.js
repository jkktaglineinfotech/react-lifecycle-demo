import { useEffect, useState } from "react";
import { getUsers } from "../api/user";
import { formatUserData } from "../utils/helpers";
import { useDispatch } from "react-redux";
import {
  startLoading,
  stopLoadingError,
  stopLoadingSuccess,
} from "../redux/actions/loadingAction";

let users = "John";
let stateUpdated = false;
export const userContainer = () => {
  const onFunction = () => {
    users = "Jason";
    stateUpdated = true;
    console.log("Function Called.", users, stateUpdated);
  };
  console.log(users === "John" ? "Test" : "Test User");
  console.log("Test.", users, stateUpdated);

  const runOnUserValueChange = () => {
    console.log("Wehnever user's value changed, it calls .");
  };

  return {
    users,
    onFunction,
    stateUpdated,
  };
};
