import { createSlice, configureStore } from "@reduxjs/toolkit";

const shopUi = createSlice({
  name: "ui",
  initialState: { totalQuantity: 0, item: [] },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.item.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.item.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          image: newItem.image,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
  },
});

const store = configureStore({
  reducer: { ui: shopUi.reducer },
});

export default store;
export const storeActions = shopUi.actions;
