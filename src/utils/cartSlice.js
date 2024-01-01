import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartSlice',
    initialState:{
        itemsMap:{},
        countMap:{},
        count:0,
    },
    reducers:{
        addToCart :(state,action)=>{
            const item = action.payload;
            if(!state.countMap.hasOwnProperty(item?.id)){
                state.countMap[item?.id] = 1;
                state.itemsMap[item.id] = item;
            }else{
                state.countMap[item?.id]++;
            }
            state.count++;
        },
        removeToCart:(state,action)=>{
            const item = action.payload;
            if(state.countMap[item?.id]==1){
                delete state.countMap[item.id];
                delete state.itemsMap[item.id];
            }else{
                state.countMap[item.id]--;
            }
            state.count--;
        },
        deleteCart:(state,action)=>{
            const item = action.payload;
            const cnt = state.countMap[item.id];
            delete state.itemsMap[item.id];
            delete state.countMap[item.id];
            state.count = state.count - cnt;
        },
        clearCart :(state,action)=>{
            state.itemsMap.length=0;
            state.countMap.length=0;
            state.count=0;
        }
    }
});

export const {addToCart,removeToCart,clearCart,deleteCart} = cartSlice.actions;
export default cartSlice.reducer;