import { createSlice } from "@reduxjs/toolkit" ;

const gallerySlice = createSlice({
    name : "gallery" ,
    initialState : [] ,
    reducers: {
        addDataToGallery(state,action){ 
            state.length = 0
            state.push(...action.payload) 
              
        },      
    } 
}) ;  


export default gallerySlice.reducer ;
export const {addDataToGallery} = gallerySlice.actions ;