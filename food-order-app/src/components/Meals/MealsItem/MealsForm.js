import Input from '../../UI/Input/Input';
import classes from './MealsForm.module.css';

const MealsForm = (props) => {
    return (
        <div className={classes.form}>
        <form>
            <Input label='Amount' input={{
                id: `input_${props.id}`,
                type: 'number',
                min: 1,
                max: 5,
                step: 1,
            }} />
            <button>+ Add</button>
        </form>
        </div>
    )
};

export default MealsForm;