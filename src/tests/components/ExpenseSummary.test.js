import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import { shallow } from 'enzyme';

test('should show 0 expenses and $0 when no expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={0} expensesTotal={0} />);
    expect(wrapper).toMatchSnapshot();
});

test('should show number and total of visible expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={10} expensesTotal={27568796054857} />);
    expect(wrapper).toMatchSnapshot();
});