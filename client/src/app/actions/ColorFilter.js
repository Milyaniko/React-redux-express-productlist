import { COLOR_FILTER } from "../utils/ActionTypes";

const colorFilter = (color) => {
    return dispatch =>
        dispatch({
            type: COLOR_FILTER,
            color: color
        })
}

export default colorFilter;