import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-reducer';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  const clickHandler = () => {
    const product = {
      id,
      name: title,
      price,
      description,
      quantity: 1,
    };

    dispatch(cartActions.addItemToCart(product));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button type='button' onClick={clickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
