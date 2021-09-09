import { CHANGE_PAGE, TOTAL_MOUNT } from "./types";

export const actChangePage = (changePageID) => ({
  type: CHANGE_PAGE,
  payload: changePageID,
});

export const actSetting = (total) => {
  return (dispatch) => {
    dispatch({
      type: TOTAL_MOUNT,
      payload: total,
    });
  };
};
