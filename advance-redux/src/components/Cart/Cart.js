import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector(state => state.cart.cartItems);
  const cartItems = items && items.map(item => (
    <CartItem
    item={{ title: item.name, quantity: item.quantity, total: item.quantity*item.price, price: item.price }}
    key={item.id}
    id={item.id}
  />
  ));
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems}
      </ul>
    </Card>
  );
};

export default Cart;
