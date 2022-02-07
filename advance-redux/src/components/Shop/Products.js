import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products = useSelector(state => state.product.products);
  const productList = products && products.map(product => (
      <ProductItem
        key={product.id}
        id={product.id}
        title={product.name}
        price={product.price}
        description={product.description}
      />
  ))
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productList}
      </ul>
    </section>
  );
};

export default Products;
