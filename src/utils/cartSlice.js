import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            //mutating the state here
            // Redux toolkit uses immer behind the scenes
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            //RTK-either mutate the existing satte or return a new state
            //return{items:[]};
            state.items.length = 0;
        },
    },
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;