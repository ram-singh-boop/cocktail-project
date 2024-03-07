import { configureStore } from '@reduxjs/toolkit';
import cocktailReducer from '../Redux/Slice/CokatailSlice';

const store = configureStore({
    reducer: {
      //cart: cartReducer,
      product: cocktailReducer,
    },

  });

  export default store;