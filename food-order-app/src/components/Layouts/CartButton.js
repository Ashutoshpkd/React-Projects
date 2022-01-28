import React, { useContext, useEffect, useState } from 'react';
import cartIcon from '../../assets/5678571.svg';
import AuthContext from '../../store/auth-context';
import CartContext from '../../store/cart-context';
import * as S from './CartButton.style';

const CartButton = (props) => {
    const ctx = useContext(AuthContext);
    const [animation, setAnimation] = useState(false);
    const cartCtx = useContext(CartContext);
    const items = cartCtx.item && cartCtx.item.reduce((currNumber, item) => {
        return currNumber + parseInt(item.amount)
    }, 0);

    useEffect(() => {
        if (cartCtx.item.length === 0) {
            return;
          }
        setAnimation(true);
        const animationTimeOut = setTimeout(() => {
            setAnimation(false);
        }, 300);

        return () => {
            clearTimeout(animationTimeOut);
        }
    }, [cartCtx.item]);

    return (
        <S.Button onClick={ctx.openModal} animate={animation}>
            <S.Wrapper>
                <S.Image src={cartIcon} />
                <S.Name>Your Cart</S.Name>
                <S.Items>{items}</S.Items>
            </S.Wrapper>
        </S.Button>
    );
}

export default CartButton;