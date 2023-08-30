import {configureStore } from '@reduxjs/toolkit' ;
import gallerySlice from './slices/gallerySlice';

const store = configureStore ({
    reducer :{
        gallery : gallerySlice,
    },
}) ;

export default store ;