import {
  REMOVE_TAB_INDEX,
  SAVE_TAB_INDEX,
  UPDATE_TAB_INDEX,
} from "../constants/tabConstants";

export const saveTabIndex = (tabIndex) => (dispatch) => {
  dispatch({ type: SAVE_TAB_INDEX, payload: tabIndex });
};

export const removeTabIndex = () => (dispatch) =>
  dispatch({
    type: REMOVE_TAB_INDEX,
  });

export const updateTabIndex = (tabIndex) => (dispatch) =>
  dispatch({
    type: UPDATE_TAB_INDEX,
    payload: tabIndex,
  });
