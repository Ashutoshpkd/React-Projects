import * as S from './ExpenseItem.style';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../../Card/Card';

function ExpenseItem(props) {
    const {
        date,
        title,
        amount,
    } = props;
    return (
        <Card>
        <S.ExpenseItem>
            <ExpenseDate date={date}/>
            <S.ContentWrapper>
            <S.Description>{title}</S.Description>
            <S.Amount>{amount}</S.Amount>
            </S.ContentWrapper>
        </S.ExpenseItem>
        </Card>
    );
}

export default ExpenseItem;