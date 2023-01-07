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
        existingItem.totalPrice = (existingItem.totalPrice + newItem.price).toFixed(2);
      }
    },
    removeItemFromCart(state, action) {
      const product = state.item.find((item) => item.id === action.payload);

      console.log("QUANTITY: ", product.quantity);
      if (product) {
        state.totalQuantity = (state.totalQuantity - product.quantity).toFixed(2);
        state.item = state.item.filter((item) => item.id !== action.payload);
      } else {
        return;
      }
    },
    incrementCart(state, action) {
      const product = state.item.find((item) => item.id === action.payload);
      if (product) {
        product.quantity++;
        state.totalQuantity++;
        product.totalPrice = (product.price * product.quantity).toFixed(2);
      } else {
        return;
      }
    },
    decrementCart(state, action) {
      const product = state.item.find((item) => item.id === action.payload);

      if (product.quantity >= 1) {
        product.quantity--;
        state.totalQuantity--;
        console.log("QUANTITY: ", product.quantity);
        product.totalPrice = (product.price * product.quantity).toFixed(2);
      } else {
        state.item = state.item.filter((item) => item.id !== action.payload);
      }
    },
  },
});

const store = configureStore({
  reducer: { ui: shopUi.reducer },
});

export default store;
export const storeActions = shopUi.actions;
