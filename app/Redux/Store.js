import {configureStore} from '@reduxjs/toolkit';
import basketSlice from './Slices/BasketSlice';
import RestaurantSlice from './Slices/RestaurantSlice';
import cartSlice from './Slices/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    resturant: RestaurantSlice,
  },
});
