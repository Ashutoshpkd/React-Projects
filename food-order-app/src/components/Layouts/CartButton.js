import React, { useContext } from 'react';
import cartIcon from '../../assets/cartIcon.svg';
import AuthContext from '../../store/auth-context';
import * as S from './CartButton.style';

const CartButton = (props) => {
    const {
        items,
    } = props;
    const ctx = useContext(AuthContext);
    return (
        <S.Button onClick={ctx.openModal}>
            <S.Wrapper>
                <S.Image src={cartIcon} />
                <S.Name>Your Cart</S.Name>
                <S.Items>{items}</S.Items>
            </S.Wrapper>
        </S.Button>
    );
}

export default CartButton;