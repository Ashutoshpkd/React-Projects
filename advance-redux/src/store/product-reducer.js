import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [{
        id: 1,
        name: 'Test Item 1',
        description: 'This is a first product - amazing!',
        price: 6,
    },{
        id: 2,
        name: 'Test Item 2',
        description: 'This is a second product - amazing!',
        price: 10,
    },{
        id: 3,
        name: 'Test Item 3',
        description: 'This is a third product - amazing!',
        price: 2,
    }],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
});

export const productActions = productSlice.actions;
export default productSlice.reducer;