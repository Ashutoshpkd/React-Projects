import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const addClickHandler = (e) => {
    e.preventDefault();
    const item = {
      id: props.id,
      amount: 1,
      name: props.name,
      price: props.price,
  };
  props.onAdd(item);
  };

  const removeClickHandler = (e) => {
    e.preventDefault();
    props.onRemove(props.id);
  }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeClickHandler}>−</button>
        <button onClick={addClickHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
