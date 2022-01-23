import React from "react";

const CartContext = React.createContext({
    item: [],
    totalAMount: 0,
    addItem: () => {},
    removeItem: () => {},
});

export default CartContext;