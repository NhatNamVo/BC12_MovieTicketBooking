import { FETCH_THEATER_SUCCESS } from "../../module/theaterType";

const { FILTER_SORT_THEATER_TYPE } = require("./theaterFilterType");

const initialState = {
    theater: [],
    sort: 0,
    sortVal: "BHDStar",
};

const theaterFilterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FILTER_SORT_THEATER_TYPE:
            let sortValue;
            switch (payload) {
                case 0:
                    sortValue = "BHDStar";
                    break;
                case 1:
                    sortValue = "CGV";
                    break;
                case 2:
                    sortValue = "CineStar";
                    break;
                case 3:
                    sortValue = "Galaxy";
                    break;
                case 4:
                    sortValue = "LotteCinima";
                    break;
                default:
                    return state;
            }
            return { ...state, sort: payload, sortVal: sortValue };
        case FETCH_THEATER_SUCCESS:
            return { ...state, theater: payload, loading: false };
        default:
            return state;
    }
}
export default theaterFilterReducer;