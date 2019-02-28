import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

//remove
test('should set up remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    //use toEqual for objects and arrays, toBe for booleans, numbers, strings etc
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

//edit expense
test('should set up edit expense action object', () => {
    const action = editExpense('abc123', {note: "new note"});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: 'new note'
        }      
    });
});

//add expense
test('should set up add expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: 100000,
        createdAt: 1000,
        note: 'this month'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should set up add expense action object with default values', () => {
    const defaults = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
          ...defaults  
        }      
    });
});