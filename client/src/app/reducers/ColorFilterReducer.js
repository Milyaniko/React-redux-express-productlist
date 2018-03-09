import { COLOR_FILTER } from "../utils/ActionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case (COLOR_FILTER):
        if (state.indexOf(action.color) !== -1) {
            console.log(state.indexOf(action.color))
            return state.slice(0, state.indexOf(action.color)).concat(state.slice(state.indexOf(action.color) + 1))
        }
        return [...state, action.color]
        default:
            return state;
    }
}