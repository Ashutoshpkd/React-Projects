import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-reducer";
import productReducer from "./product-reducer";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
    }
});

export default store;