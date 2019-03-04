import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
// default state
test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

// add
test('should add an expense', () => {
    const expense = { description: 'test', amount: 500000 };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

// remove by id
test('should remove an expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

// does not remove with bad id
test('should not remove an expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

// edit
test('should edit an expense', () => {
    const update = {description: 'new description', note: 'new note'};
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            ...update
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe(update.description);
});

// do not edit if expense not found
test('should not edit an expense with invalid id', () => {
    const update = {description: 'new description', note: 'new note'};
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            ...update
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);

});
    
