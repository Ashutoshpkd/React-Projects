import { useContext, useState } from 'react';
import AuthContext from '../../store/auth-context';
import CartContext from '../../store/cart-context';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import Checkout from './Checkout/Checkout';

const Cart = (props) => {
    const ctx = useContext(AuthContext);
    const cartCtx = useContext(CartContext);
    const [openForm, setOpenForm] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
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

    const onConfirm = async (userData) => {
        const response = await fetch('https://custom-hook-1-default-rtdb.firebaseio.com/orders.json',{
            method: 'POST',
            body: JSON.stringify({
                userData: userData,
                cartItems: cartCtx.item,
            })
        });

        console.log(response);

        if(response.ok) {
            setOrderSuccess(true);
            setOpenForm(false);
        }
    }

    let content =  <div>
                    {cartItems}
                    <div className={classes.total}>
                        <span>Total Amount</span>
                        <span>{totalItem}</span>
                    </div>
                    <div className={classes.actions}>
                    {!openForm && (
                        <>
                        <button type='button' className={classes['button--alt']} onClick={ctx.closeModal}>Close</button>
                        <button type='button' className={classes.button} onClick={(e) => setOpenForm(true)}>Order</button>
                        </>
                    )}
                    </div>
                </div>
        
        if(orderSuccess) {
            const clickClose = () => {
                cartCtx.clearCart();
                ctx.closeModal();
            }
            content = <>
                <p>Your order was successful.</p>
                <Button type='button' onClick={clickClose} >Close </Button>
            </>
        }
    return (
        <Modal>
            {content}
            {openForm && (
            <Checkout onCancel={() => setOpenForm(false)} onConfirm={onConfirm}/>
            )}
        </Modal>
    );
};

export default Cart;