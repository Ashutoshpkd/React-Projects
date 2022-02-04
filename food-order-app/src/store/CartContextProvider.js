import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartItem = {
    item: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {},
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const existingItemIndex = state.item.findIndex(item => item.id === action.item.id);
        let updatedItem;
        let updatedItems;

        if(existingItemIndex !== -1) {
            updatedItem = {
                ...state.item[existingItemIndex],
                amount: parseInt(state.item[existingItemIndex].amount) + parseInt(action.item.amount),
            }
            updatedItems = [...state.item];
            updatedItems[existingItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.item.concat(action.item);
        }
        const updatedAmount = +state.totalAmount + (parseFloat(action.item.price) * parseFloat(action.item.amount));

        return {
            item: updatedItems,
            totalAmount: parseFloat(updatedAmount.toFixed(2)),
        }
    }

    if(action.type === 'REMOVE') {
        const existingItemIndex = state.item.findIndex(item => item.id === action.id);
        let updatedItems = [...state.item];
        let updatedItem;
        const removedItemPrice = state.item[existingItemIndex].price;
        if(state.item[existingItemIndex].amount === 1) {
            updatedItems.splice(existingItemIndex, 1);
        }
        else {
            updatedItem = {
                ...state.item[existingItemIndex],
                amount: state.item[existingItemIndex].amount - 1,
            }
            updatedItems[existingItemIndex] = updatedItem;
        }
        const totalAmount = parseFloat((state.totalAmount - removedItemPrice).toFixed(2));

        return {
            item: updatedItems,
            totalAmount,
        };
    }

    if(action.type === 'CLEAR') {
        return defaultCartItem;
    }
    return defaultCartItem;
};

const CartContextProvider = (props) => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartItem);

    const onAddItem = (item) => {
        dispatchCartState({type: 'ADD', item:item});
    }

    const onRemoveItem = (id) => {
        dispatchCartState({type: 'REMOVE', id:id});
    }

    const onClearCart = () => {
        dispatchCartState({type: 'CLEAR'});
    }

    const cartItems = {
        item: cartState.item,
        totalAmount: cartState.totalAmount,
        addItem: onAddItem,
        removeItem: onRemoveItem,
        clearCart: onClearCart,
    };

    return (
        <CartContext.Provider value={cartItems}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;