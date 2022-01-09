import * as S from './CourseForm.style';
import { useState } from 'react';
import Card from '../Card/Card';

const CourseForm = (props) => {
    const [goal, setGoal] = useState('');

    const changeHandler = (e) => {
        setGoal(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.onSubmit(goal);
        setGoal('');
    };

    return (
        <Card>
            <S.Form onSubmit={submitHandler}>
                <S.Wrapper>
                <S.Label>Course Goals</S.Label>
                <S.Input type='text' value={goal} onChange={changeHandler} />
                </S.Wrapper>
                <S.ButtonWrapper >
                <S.Button type='submit'>Add Goal</S.Button>
                </S.ButtonWrapper>
            </S.Form>
        </Card>
    );
};

export default CourseForm;