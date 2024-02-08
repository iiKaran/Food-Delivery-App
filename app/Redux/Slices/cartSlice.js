import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [{}],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price,image } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, name, price, quantity: 1,image:image });
      }
      state.totalPrice += price;
    },
    removeFromCart: (state, action) => {
      const { id, price } = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index !== -1) {
        const item = state.items[index];
        item.quantity--;
        if (item.quantity === 0) {
          state.items.splice(index, 1);
        }
        state.totalPrice -= price;
      }
    },
    emptyCart: state => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
