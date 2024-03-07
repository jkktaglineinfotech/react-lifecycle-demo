import {
  REMOVE_TAB_INDEX,
  SAVE_TAB_INDEX,
  UPDATE_TAB_INDEX,
} from "../constants/tabConstants";

export const tabReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_TAB_INDEX:
      return { ...state, currentTabIndex: action.payload };

    case UPDATE_TAB_INDEX:
      return { ...state, currentTabIndex: action.payload };

    case REMOVE_TAB_INDEX:
      return { ...state, currentTabIndex: 0 };

    default:
      return state;
  }
};
