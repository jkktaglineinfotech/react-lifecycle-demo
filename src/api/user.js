import { userApiEndPoints } from "../description/user.description";
import { catchError } from "../utils/helpers";
import client from "./baseClient";

export const getUsers = async (page = 1, per_page = 10) => {
  try {
    const { data } = await client.get(
      `${userApiEndPoints.getUsers}?page=${page}&per_page=${per_page}`
    );
    return data;
  } catch (error) {
    catchError(error);
  }
};
