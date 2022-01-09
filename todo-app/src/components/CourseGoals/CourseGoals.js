import CourseForm from "../CourseGoalForm/CourseForm";
import { useState } from "react";
import GoalsList from "./components/GoalsList/GoalsList";

const CourseGoal = () => {
    const [courseGoals, setCourseGoals] = useState();
    const [render, setRender] = useState(false);

    const submitHandler = (goal) => {
        courseGoals ?
        setCourseGoals((prevState) => (
            [...prevState, goal]
        )) : setCourseGoals([goal,]);
    };

    const clickHandler = (id) => {
        setCourseGoals((prevState) => {
            prevState.splice(id,1);
            return prevState;
        });

        setRender((prevState) => (!prevState));
    }

    console.log(courseGoals, render);

    return (
        <>
        <CourseForm onSubmit={submitHandler}></CourseForm>
        {courseGoals && courseGoals.map((courseGoal, index) => (
            <GoalsList key={index} goal={courseGoal} id={index} onClickList={clickHandler}/>
        ))}
        </>
        
    );
};

export default CourseGoal;