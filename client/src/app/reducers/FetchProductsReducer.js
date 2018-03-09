import { FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from "../utils/ActionTypes";

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_DATA):
            return Object.assign({}, state, {
                isFetching: true,
                data: [],
                hasError: false,
                errorMessage: null
            });

        case (FETCH_DATA_SUCCESS):
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            });

        case (FETCH_DATA_ERROR):
            return Object.assign({}, state, {
                isFetching: false,
                data: null,
                hasError: true,
                errorMessage: action.payload
            });

        default:
            return state;
    }
}
