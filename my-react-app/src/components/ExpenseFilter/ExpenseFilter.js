import React from 'react';
import * as S from './ExpenseFilter.style';

const ExpenseFilter = (props) => {
    const {
        selected,
        onSelectChange,
    } = props;

    const changeHandler = (e) => {
        onSelectChange(e.target.value)
        console.log(e.target.value);
    }
    return (
        <S.MainWrapper>
            <S.ContentWrapper>
            <S.Label>Filter By Year</S.Label>
                <S.Select value={selected} onChange={changeHandler}>
                    <S.Options value='2019'>2019</S.Options>
                    <S.Options value='2020'>2020</S.Options>
                    <S.Options value='2021'>2021</S.Options>
                    <S.Options value='2022'>2022</S.Options>
                </S.Select>
            </S.ContentWrapper>
        </S.MainWrapper>
    );
}

export default ExpenseFilter;