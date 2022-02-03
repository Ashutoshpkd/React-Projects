import React from "react";

const CartContext = React.createContext({
    item: [],
    totalAMount: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
});

export default CartContext;