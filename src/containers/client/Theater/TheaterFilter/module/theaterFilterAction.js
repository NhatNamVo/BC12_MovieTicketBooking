import { FILTER_SORT_DATE, FILTER_SORT_THEATER_TYPE } from "./theaterFilterType"

export const actFetchTheaterFilter = theaterType => {
    return dispatch =>{
        dispatch({
            type: FILTER_SORT_THEATER_TYPE,
            payload: theaterType,
        })
    }
}
export const actFetchTheaterDate = allNgayChieu => {
    return dispatch => {
        dispatch({
            type: FILTER_SORT_DATE,
            payload:allNgayChieu,
        })
    }
}