import { connect, useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = (props) => {
  // const {
  //   counter,
  //   showCounter,
  //   increment,
  //   decrement,
  //   toggle,
  //   increase,
  // } = props;

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state=> state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE'});
    //toggle();
  };

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
    //increment();
  }

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
    //decrement();
  }

  const increaseHandler = () => {
    dispatch({ type: 'INCREASE', increase: 10 });
    //increase({ increase: 10 });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <div className={classes.value}>{counter}</div>
      )}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// const mapStateToProps = state => {
//   return {
//     counter: state.counter,
//     showCounter: state.showCounter,
//   }
// };

// const dispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type:'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' }),
//     toggle: () => dispatch({ type: 'TOGGLE' }),
//     increase: (payload) => dispatch({ type: 'INCREASE', ...payload }),
//   }
// };

export default Counter;
