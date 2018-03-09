import { COLOR_FILTER } from "../../app/utils/ActionTypes";
import ColorFilter from '../../app/reducers/ColorFilterReducer'

describe('Color filter reducer', () => {
    it('adds a new color and delete the duplicates', () => {
        expect(ColorFilter(undefined, {})).toEqual([]);
    });
});