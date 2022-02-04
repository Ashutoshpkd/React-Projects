import classes from './Counter.module.css';
import { connect } from 'react-redux';

const Counter = (props) => {

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    props.increment();
  }

  const decrementHandler = () => {
    props.decrement();
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{props.counter}</div>
      <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  }
};

export default connect(mapStateToProps,dispatchToProps)(Counter);
