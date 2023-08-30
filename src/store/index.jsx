import {combineReducers, configureStore } from '@reduxjs/toolkit' ;
import gallerySlice from './slices/gallerySlice';
import ProductView from './slices/ProductViewSlice';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key : "root",
    version : 1 , 
    storage,
}

const reducer =  combineReducers({
    ProductView : ProductView,
    gallery : gallerySlice,
 

})
const persistedReducer = persistReducer(persistConfig,reducer) ;
const store = configureStore ({
    reducer: persistedReducer, 

}) ;

export default store ;