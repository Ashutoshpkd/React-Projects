import CourseForm from "../CourseGoalForm/CourseForm";
import { useState } from "react";
import GoalsList from "./components/GoalsList/GoalsList";
import ErrorModal from "../ErrorModal/ErrorModal";

const CourseGoal = () => {
    const [courseGoals, setCourseGoals] = useState([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [nameA] = useState('ASHUTOSH');

    const submitHandler = (name, age) => {

        const goal = {
            name: name,
            age: age,
        };
        setCourseGoals((prevState) => (
            [...prevState, goal]
        ));
    };

    const clickHandler = (id) => {
        setCourseGoals((prevState) => {
            prevState.splice(id,1);
            return [...prevState];
        });
    };

    const checkError = (name, age) => {
        if (name.trim().length <= 0) {
            setErrorMessage('Field cannot be empty');
            setError(true);
            return false;
        }

        if (age <= 0) {
            setErrorMessage('Age should be greater than 0');
            setError(true);
            return false;
        }

        return true;
    };

    console.log(nameA);

    const closeModal = () => {
        setError(false);
        setErrorMessage('');
    };

    return (
        <>
        <CourseForm onSubmit={submitHandler} noError={checkError}></CourseForm>
        {error && (<ErrorModal title='Invalid Input' message={errorMessage} closeModal={closeModal} />)}
        {courseGoals && courseGoals.map((courseGoal, index) => (
            <GoalsList key={index} goal={courseGoal} id={index} onClickList={clickHandler}/>
        ))}
        </>
        
    );
};

export default CourseGoal;