import { createStore } from 'redux';

const INITIAL_STATE = {
    counter: 0,
    showCounter: true,
}

const conterReducer = (state = INITIAL_STATE, action) => {

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
            showCounter: !state.showCounter
        }
    }
    return state;
};

const store = createStore(conterReducer);

export default store;