import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-reducer';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.cartItems);

  const quantity = items.reduce((amount, item) => {
    return amount + item.quantity;
  }, 0);
  
  return (
    <button className={classes.button} onClick={() => dispatch(cartActions.togglecart())}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
