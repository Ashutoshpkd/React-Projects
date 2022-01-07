import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import { useState } from 'react';
import * as S from './Expense.style';
import Card from '../Card/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

const Expense = (props) => {
    const { expenses } = props;
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

    const changeFilteredYear = (selectedYear) => {
      setFilteredYear(selectedYear);
    }
    console.log('EXPENSES', JSON.stringify(expenses));
    return (
      <>
        <Card>
        <S.ExpenseWrapper>
        <ExpenseFilter onSelectChange={changeFilteredYear} selected={filteredYear}/>
          {expenses.map(expense => (
            <ExpenseItem 
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </S.ExpenseWrapper>
        </Card>
      </>
    );
}

export default Expense;