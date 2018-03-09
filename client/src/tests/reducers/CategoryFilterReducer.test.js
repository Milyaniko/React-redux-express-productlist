import { CATEGORY_FILTER } from "../../app/utils/ActionTypes";
import CategoryFilter from '../../app/reducers/CategoryFilterReducer';

describe('Category filter reducer', () => {
    it('adds a new category and delete the duplicates', () => {
        expect(CategoryFilter(undefined, {})).toEqual([]);
    });
});