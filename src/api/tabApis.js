import axios from "axios";
import { catchError } from "../utils/helpers";
import client from "./baseClient";

export const getDataFromAPI = async (apiEndPoint) => {
  try {
    const { data } = await axios.get(apiEndPoint);
    return data;
  } catch (error) {
    catchError(error);
  }
};
