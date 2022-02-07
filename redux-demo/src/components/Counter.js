import classes from './Counter.module.css';
import { connect } from 'react-redux';

const Counter = (props) => {
  const {
    toggle,
    increment,
    decrement,
    counter,
    showCounter,
  } = props;

  const toggleCounterHandler = () => {
    toggle();
  };

  const incrementHandler = () => {
    increment();
  }

  const decrementHandler = () => {
    decrement();
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <div className={classes.value}>{counter}</div>
      )}
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
    showCounter: state.showCounter,
  }
};

const dispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    toggle: () => dispatch({ type: 'TOGGLE' }),
  }
};

export default connect(mapStateToProps,dispatchToProps)(Counter);
