import { CHANGE_PAGE } from "./types";

export const actChangePage = (changePageID) => ({
    type: CHANGE_PAGE,
    payload: changePageID,
  });