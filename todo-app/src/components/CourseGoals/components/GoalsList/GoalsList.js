import * as S from './GoalsList.style';

const GoalsList = (props) => {
    const {
        goal,
        id,
    } = props;

    console.log(goal, id);

    const clickHandler = () => {
        props.onClickList(id);
    }

    return (
        <S.Main>
            <S.List onClick={clickHandler}>
                {goal}
            </S.List>
        </S.Main>
    );
};

export default GoalsList;