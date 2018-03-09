import { combineReducers } from "redux";
import FetchProductsReducer from "./FetchProductsReducer";
import CategoryFilterReducer from "./CategoryFilterReducer";
import ColorFilterReducer from './ColorFilterReducer';

// Combines our multiple reducers
export default combineReducers({
    products: FetchProductsReducer,
    category: CategoryFilterReducer,
    color: ColorFilterReducer
});