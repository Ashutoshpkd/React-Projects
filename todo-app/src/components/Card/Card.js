 import * as S from './Card.style';

 const Card = (props) => {

    return (
        <S.Card>
            {props.children}
        </S.Card>
    );
 };

 export default Card;