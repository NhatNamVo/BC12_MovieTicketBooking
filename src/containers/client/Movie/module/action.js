import { ADD_MOVIE_LIST, FILTER_SHOW_MOVIE_MOUNT, FILTER_SORT_MOVIE_TYPE } from "./types"

export const actFilterMovieType = movieType => {
    return dispatch =>{
        dispatch({
            type: FILTER_SORT_MOVIE_TYPE,
            payload: movieType,
        })
    }
}
export const actFilterMovieMountShow = movieMount => {
    return dispatch =>{
        dispatch({
            type: FILTER_SHOW_MOVIE_MOUNT,
            payload: movieMount,
        })
    }
}

export const actAddMovieList = movieList => {
    return dispatch => {
        dispatch({
            type: ADD_MOVIE_LIST,
            payload: movieList,
        })
    }
}
