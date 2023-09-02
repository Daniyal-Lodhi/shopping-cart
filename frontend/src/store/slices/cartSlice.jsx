import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cartSlice',
    initialState :{
        items:[],
        totalPrice:0,
    },
    reducers :{
        addToCart(state,action){
            return(
                {
                    items: state.items.concat([action.payload]),
                    totalPrice : state.totalPrice+action.payload.price ,
                }
            )
        },
        removeFromCart(state,action){
            for(var i = 0 ; i<state.items.length ; i++){
                if(state.items[i].id === action.payload){
                var deletedItemPrice = state.items[i].price
                state.items.splice(i,1) ;
                break
                }
            }

            if (state.items.length !== 0){
            state.totalPrice = state.totalPrice - deletedItemPrice
            }
            else{
                state.totalPrice = 0;
            }

        }, 
        clearCart(state,action){
            return({
                items:[],
                totalPrice : 0
            })
        }
    }
})

export default cartSlice.reducer ;
export const {addToCart ,removeFromCart ,clearCart} = cartSlice.actions;