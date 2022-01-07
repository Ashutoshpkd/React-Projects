import * as S from './ExpenseDate.style';

const ExpenseDate = (props) => {
    const { date } = props;
    const month = date.toLocaleString('en-US', {month: 'long'});
    const day = date.toLocaleString('en-US', {day: '2-digit'});
    const year = date.getFullYear();
    return (
        <S.ContentWrapper>
            <S.Month>{month}</S.Month>
            <S.Year>{year}</S.Year>
            <S.Day>{day}</S.Day>
        </S.ContentWrapper>
    );
}

export default ExpenseDate;