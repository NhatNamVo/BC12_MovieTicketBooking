import { FILTER_SORT_THEATER_TYPE } from "./theaterFilterType"

export const actFetchTheaterFilter = theaterType => {
    return dispatch =>{
        dispatch({
            type: FILTER_SORT_THEATER_TYPE,
            payload: theaterType,
        })
    }
}