import * as S from './CourseForm.style';
import { useState } from 'react';
import Card from '../Card/Card';

const CourseForm = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const namechangeHandler = (e) => {
        setName(e.target.value);
    };

    const agechangeHandler = (e) => {
        setAge(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if(props.noError(name, age)) {
            props.onSubmit(name, age);
        };
        setName('');
        setAge('');
    };

    return (
        <Card>
            <S.Form onSubmit={submitHandler}>
                <S.Wrapper>
                <S.Label>Name</S.Label>
                <S.Input type='text' value={name} onChange={namechangeHandler} />
                </S.Wrapper>
                <S.Wrapper>
                <S.Label>Age</S.Label>
                <S.Input type='text' value={age} onChange={agechangeHandler} />
                </S.Wrapper>
                <S.ButtonWrapper >
                <S.Button type='submit'>Add User</S.Button>
                </S.ButtonWrapper>
            </S.Form>
        </Card>
    );
};

export default CourseForm;