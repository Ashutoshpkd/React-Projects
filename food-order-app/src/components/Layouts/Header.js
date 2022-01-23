import React from "react";
import * as S from './Header.style';
import Meals from '../../assets/meals.jpeg';
import CartButton from "./CartButton";

const Header = (props) => {
    const {
        title,
    } = props;

    return (
        <React.Fragment>
            <S.Header>
                <h1>{title}</h1>
                <CartButton
                    items={3}
                />
            </S.Header>
            <S.Wrapper>
            <S.Image src={Meals} />
            </S.Wrapper>
        </React.Fragment>
    )
};

export default Header;