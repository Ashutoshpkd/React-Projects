import MealsForm from './MealsForm';
import React, {useContext, useState} from 'react';
import classes from './MealsItem.module.css';
import CartContext from '../../../store/cart-context';

const MealsItem = (props) => {
    const {
        name,
        description,
        price,
        id,
    } = props;

    const [amount, setAmount] = useState(1);
    const ctx = useContext(CartContext);

    const changeHandler = (itemAmount) => {
        setAmount(itemAmount);
    }

    const submitHandler = () => {
        const item = {
            id: props.id,
            amount: amount,
            name: name,
            price: price,
        };
        ctx.addItem(item);
    }

    const priceInCurr = `$${price}`;

    return (
        <li className={classes.wrapper}>
            <div className={classes.meal}>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{priceInCurr}</div>
            </div>
            <div className={classes.mealsForm}>
                <MealsForm onChange={changeHandler} onSubmit={submitHandler} id={id} amount={amount}/>
            </div>
        </li>
    );
};

export default MealsItem;