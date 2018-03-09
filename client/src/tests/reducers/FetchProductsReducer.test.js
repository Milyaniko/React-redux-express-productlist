import { FETCH_DATA_SUCCESS, FETCH_DATA, FETCH_DATA_ERROR } from "../../app/utils/ActionTypes";
import Clients from '../../app/reducers/FetchProductsReducer';

describe('Request Reducer', () => {
    it('has an initial state', () => {
        expect(Clients(undefined, {
            type: 'unexpected'
        })).toEqual({
            isFetching: null,
            data: [],
            hasError: false,
            errorMessage: null
        });
    });
    it('can handle FETCH_DATA', () => {
        expect(Clients(undefined, {
            type: FETCH_DATA,
            payload: false
        })).toEqual({
            isFetching: true,
            data: [],
            hasError: false,
            errorMessage: null
        });
    });
    it('can handle FETCH_DATA_SUCCESS', () => {
        expect(Clients(undefined, {
            type: FETCH_DATA_SUCCESS,
            payload: true
        })).toEqual({
            isFetching: false,
            data: true,
            hasError: false,
            errorMessage: null
        });
    });
    it('can handle FETCH_DATA_ERROR', () => {
        expect(Clients(undefined, {
            type: FETCH_DATA_ERROR,
            payload: true
        })).toEqual({
            isFetching: false,
            data: null,
            hasError: true,
            errorMessage: true
        });
    });
})

