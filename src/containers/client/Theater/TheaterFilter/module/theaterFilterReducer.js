const { FILTER_SORT_THEATER_TYPE } = require("./theaterFilterType");

const initialState = {
    theater: [],
    sort: 0,
    sortVal: "BHD",
};

const theaterFilterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FILTER_SORT_THEATER_TYPE:
            let sortValue;
            switch (payload) {
                case 0:
                    sortValue = "BHD";
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
                default:
                    sortValue = "Lotte";
                    break;
            }
            return { ...state, sort: payload, sortVal: sortValue };
        default:
            return state;
    }
}
export default theaterFilterReducer;