import { CATEGORY_FILTER } from "../utils/ActionTypes";

const categoryFilter = (category) => {
    return dispatch =>
        dispatch({
            type: CATEGORY_FILTER,
            category: category
        })
}

export default categoryFilter;