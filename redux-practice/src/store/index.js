import { createStore } from 'redux';

const INITIAL_STATE = {
    counter: 0,
    showCounter: true,
};

const reducer = (state = INITIAL_STATE, action) => {
    if(action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1,
        }
    }
    if(action.type === 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1,
        }
    }
    if(action.type === 'TOGGLE') {
        return {
            ...state,
            showCounter: !state.showCounter,
        }
    }
    if(action.type === 'INCREASE') {
        return {
            ...state,
            counter: state.counter + action.increase,
        }
    }
    return state;
}
const store = createStore(reducer);

export default store;