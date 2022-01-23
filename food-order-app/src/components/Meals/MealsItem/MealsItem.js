import MealsForm from './MealsForm';
import classes from './MealsItem.module.css';

const MealsItem = (props) => {
    const {
        name,
        description,
        price,
    } = props;

    const priceInCurr = `$${price}`;

    return (
        <li className={classes.wrapper}>
            <div className={classes.meal}>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{priceInCurr}</div>
            </div>
            <div className={classes.mealsForm}>
                <MealsForm />
            </div>
        </li>
    );
};

export default MealsItem;