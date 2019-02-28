import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';

// set start date
test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});
//set end date
test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});
//sort by date
test('should generate sort by date action object', () => {
    //const expenses = {}
    const action = sortByDate();    
    expect(action).toEqual({ type: 'SORT_BY_DATE' });
});
//sort by amount
test('should generate sort by amount action object', () => {
    //const expenses = {}
    const action = sortByAmount();    
    expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});
//set text filter with text
test('should generate set text filter action object with text passed in', () => {
    const text = 'test';
    const action = setTextFilter(text);    
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});
//set blank text filter (remove filter)
test('should generate set text filter action object with blank text field', () => {
    const action = setTextFilter();    
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});