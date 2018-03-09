import { FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from "../utils/ActionTypes";

const fetchProducts = () => {
    return dispatch => {
        dispatch({ type: FETCH_DATA })

        return fetch('/api/products')
            .then((res) => res.json())
            .then((customers) => {
                dispatch({ type: FETCH_DATA_SUCCESS, payload: customers })
            })
            .catch((error) => {
                dispatch({ type: FETCH_DATA_ERROR, payload: error })
            })

    }
};

export default fetchProducts;