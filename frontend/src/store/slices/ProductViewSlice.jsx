import { createSlice } from "@reduxjs/toolkit";




const productView = createSlice({
    name : "Overview",
    initialState : {},
    reducers:{
     addToOverview(state,action){
        
        return (action.payload)
     },
    }
})

export default productView.reducer ;
export const {addToOverview} = productView.actions ;