import { CATEGORY_FILTER } from "../utils/ActionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case (CATEGORY_FILTER):
            if (state.indexOf(action.category) !== -1) {
                console.log(state.indexOf(action.category))
                return state.slice(0, state.indexOf(action.category)).concat(state.slice(state.indexOf(action.category) + 1))
            }
            return [...state, action.category]
        default:
            return state;
    }
}