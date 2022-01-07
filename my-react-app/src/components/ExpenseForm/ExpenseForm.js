import React, { useState } from 'react';
import * as S from './ExpenseForm.style';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const amountChangeHandler = e => {
        setAmount(e.target.value);
    }

    const dateChangeHandler = e => {
        setDate(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
        };
        setTitle('');
        setAmount('');
        setDate('');
        props.onAddExpense(expenseData);
    }
    return (
        <S.MainWrapper>
        <S.Form onSubmit={submitHandler}>
            <S.Main>
            <S.InputWrapper>
            <S.Label>Title</S.Label>
            <S.FormInput type='text' value={title} onChange={titleChangeHandler}/>
            </S.InputWrapper>
            <S.InputWrapper>
            <S.Label>Amount</S.Label>
            <S.FormInput type='number' value={amount} onChange={amountChangeHandler}/>
            </S.InputWrapper>
            </S.Main>
            <S.Main>
            <S.InputWrapper>
            <S.Label>Date</S.Label>
            <S.FormInput type='date' value={date} onChange={dateChangeHandler}/>
            </S.InputWrapper>
            </S.Main>
            <S.ButtonWrapper>
            <S.Button type='submit'>Add Expense</S.Button>
            </S.ButtonWrapper>
        </S.Form>
        </S.MainWrapper>
    );
}

export default ExpenseForm;