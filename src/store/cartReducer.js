import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [], // Initialize cart as an empty array
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartToStore: (state, data) => {
      state.cart.push(data.payload)
    },
    removeCartToStore: (state, data) => {
      state.cart.pop(data.payload, 1)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCartToStore, removeCartToStore } = cartSlice.actions

export default cartSlice.reducer