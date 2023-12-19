import {configureStore} from '@reduxjs/toolkit';
import basketSlice from './Slices/BasketSlice';
import RestaurantSlice from './Slices/RestaurantSlice';

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    resturant: RestaurantSlice,
  },
});
