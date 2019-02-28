import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = { 
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
     };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set text filter to given text', () => {
    const text = 'test';
    const state = filtersReducer(undefined, { 
        type: 'SET_TEXT_FILTER',
        text
    });
    expect(state.text).toBe(text);
});
// should set start date filter
test('should set start date filter', () => {
    const startDate = moment(0);
    const state = filtersReducer(undefined, { 
        type: 'SET_START_DATE',
        startDate
    });
    expect(state.startDate).toEqual(startDate);
});
// should set end date filter
test('should set end date filter', () => {
    const endDate = moment(0);
    const state = filtersReducer(undefined, { 
        type: 'SET_END_DATE',
        endDate
    });
    expect(state.endDate).toEqual(endDate);
});