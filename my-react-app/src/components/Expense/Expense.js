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
    
    const expensesInSelectedYear = expenses.filter((expense) => (expense.date.getFullYear() === parseInt(filteredYear)));

    let expenseContent = <S.Content>No Expenses to be displayed</S.Content>

    if (expensesInSelectedYear.length > 0) {
      expenseContent = expensesInSelectedYear.map(expense => (
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    }
    return (
      <>
        <Card>
        <S.ExpenseWrapper>
        <ExpenseFilter onSelectChange={changeFilteredYear} selected={filteredYear}/>
        {expenseContent}
        </S.ExpenseWrapper>
        </Card>
      </>
    );
}

export default Expense;