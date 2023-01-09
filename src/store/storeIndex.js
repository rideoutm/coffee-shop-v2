import { createSlice, configureStore } from "@reduxjs/toolkit";

const shopUi = createSlice({
  name: "ui",
  initialState: { totalQuantity: 0, item: [], finalTotal: 0 },
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
        state.finalTotal = state.item.reduce((sumTotal, current) => (sumTotal += current.totalPrice), 0);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = Number((existingItem.totalPrice + newItem.price).toFixed(2));
        state.finalTotal = state.item.reduce((sumTotal, totalprice) => (sumTotal += totalprice.totalPrice), 0);
      }
    },
    removeItemFromCart(state, action) {
      const product = state.item.find((item) => item.id === action.payload);

      console.log("QUANTITY: ", product.quantity);
      if (product) {
        state.totalQuantity = state.totalQuantity - product.quantity;
        state.item = state.item.filter((item) => item.id !== action.payload);
        state.finalTotal -= Number(product.totalPrice.toFixed(2));
      } else if (state.finalTotal === 0) {
        state.finalTotal = 0;
      }
    },
    incrementCart(state, action) {
      const product = state.item.find((item) => item.id === action.payload);

      if (product) {
        product.quantity++;
        state.totalQuantity++;
        product.totalPrice = Number((product.price * product.quantity).toFixed(2));
        state.finalTotal = state.item.reduce((sumTotal, current) => (sumTotal += current.totalPrice), 0);
      }
    },

    decrementCart(state, action) {
      const product = state.item.find((item) => item.id === action.payload);

      if (product.quantity >= 1) {
        product.quantity--;

        state.totalQuantity--;

        console.log("QUANTITY: ", product.quantity);
        product.totalPrice = Number((product.price * product.quantity).toFixed(2));
        state.finalTotal = state.item.reduce((sumTotal, current) => (sumTotal += current.totalPrice), 0);
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
