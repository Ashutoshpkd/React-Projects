import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[{id: 'c1', name: 'Sushi', price: '$10.11', amount: 2}].map(item => (
        <li>{item.name}</li>
    ))}</ul>
    const ctx = useContext(AuthContext);
    return (
        <Modal>
            <div>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>$35.60</span>
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