import React from 'react';
import * as S from './Chart.style';
import ChartBar from './ChartBar';

const Chart = (props) => {
    let expensesArray = [{ label: 'Jan', value: 0 }, { label: 'Feb', value: 0 }, { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 }, { label: 'May', value: 0 }, { label: 'June', value: 0 }, { label: 'Jul', value: 0 }, { label: 'Aug', value: 0 },
    { label: 'Sept', value: 0 }, { label: 'Oct', value: 0 }, { label: 'Nov', value: 0 }, { label: 'Dec', value: 0 },];

    const valueArray = props.expenses && props.expenses.map((expense) => (expense.amount));
    const maxInYear = valueArray ? Math.max(...valueArray) : 0;

    if (props.expenses) {
        for (const expense of props.expenses) {
            const month = expense.date.getMonth();
            expensesArray[month].value += parseFloat(expense.amount);
        }
    }

    return (
        <S.Chart>
            {expensesArray.map((expense) => (
                <ChartBar
                    key={expense.label}
                    label={expense.label}
                    value={expense.value}
                    maxValue={maxInYear}
                />
            ))}
        </S.Chart>
    );

};

export default Chart;