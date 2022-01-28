
import Input from '../../UI/Input/Input';
import classes from './MealsForm.module.css';

const MealsForm = (props) => {

    const submitHandler = (e) => {
        e.preventDefault();
        props.onSubmit();
    }

    const changeHandler = (e) => {
        props.onChange(e.target.value);
    }
    return (
        <div className={classes.form}>
        <form onSubmit={submitHandler}>
            <Input label='Amount' input={{
                id: `input_${props.id}`,
                type: 'number',
                min: 1,
                max: 5,
                step: 1,
                onChange: changeHandler,
                value: props.amount,
            }} />
            <button type='submit'>+ Add</button>
        </form>
        </div>
    )
};

export default MealsForm;