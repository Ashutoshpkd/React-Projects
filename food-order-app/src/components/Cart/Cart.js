import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
    const ctx = useContext(AuthContext);
    const cartCtx = useContext(CartContext);
    const totalItem = `$${cartCtx.totalAmount}`;
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.item.map(item => (
       <CartItem 
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onAdd={cartCtx.addItem}
        onRemove={cartCtx.removeItem}
        id={item.id}
       />
    ))}</ul>
    return (
        <Modal>
            <div>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalItem}</span>
                </div>
                <div className={classes.actions}>
                <button type='button' className={classes['button--alt']} onClick={ctx.closeModal}>Close</button>
                <button type='button' className={classes.button}>Order</button>
                </div>
            </div>
        </Modal>
    );
};

export default Cart;