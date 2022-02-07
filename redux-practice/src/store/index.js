import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const INITIAL_COUNTER_STATE = {
    counter: 0,
    showCounter: true,
};

const INITIAL_AUTH_STATE = {
    authenticated: false,
}

// const reducer = (state = INITIAL_STATE, action) => {
//     if(action.type === 'INCREMENT') {
//         return {
//             ...state,
//             counter: state.counter + 1,
//         }
//     }
//     if(action.type === 'DECREMENT') {
//         return {
//             ...state,
//             counter: state.counter - 1,
//         }
//     }
//     if(action.type === 'TOGGLE') {
//         return {
//             ...state,
//             showCounter: !state.showCounter,
//         }
//     }
//     if(action.type === 'INCREASE') {
//         return {
//             ...state,
//             counter: state.counter + action.increase,
//         }
//     }
//     return state;
// }

const counterSlice = createSlice({
    name: 'counter',
    initialState: INITIAL_COUNTER_STATE,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, payload) {
            console.log(payload.increase)
            state.counter = state.counter + payload.payload.increase;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

const authSlice = createSlice({
    name: 'authentication',
    initialState: INITIAL_AUTH_STATE,
    reducers: {
        login(state) {
            state.authenticated = true;
        },
        logout(state) {
            state.authenticated = false;
        },
    },
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;