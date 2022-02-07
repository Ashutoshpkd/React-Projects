import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    showCart: false,
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        togglecart(state) {
            state.showCart = !state.showCart;
        },
        addItemToCart(state, action) {
            for(let i=0; i<state.cartItems.length; i++) {
                if(state.cartItems[i].id === action.payload.id) {
                    state.cartItems[i].quantity += 1;
                    return;
                }
            }
            state.cartItems.push(action.payload);
        },
        removeItemFromCart(state, payload) {
            for(let i=0; i<state.cartItems.length; i++)
            {
                if(state.cartItems[i].id === payload.payload) {
                    if(state.cartItems[i].quantity === 1) {
                        state.cartItems.splice(i, 1);
                    } else {
                        state.cartItems[i].quantity -= 1;
                    }
                    return;
                }
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
