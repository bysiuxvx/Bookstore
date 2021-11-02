import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../Store"
import IBookProps from "../../Helpers/schema"

const initialState: IBookProps[] = []

export const CartSlice = createSlice({
  name: "cartContent",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IBookProps>) => {
      return [...state, action.payload]
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      return state.filter(({ id }) => id !== action.payload)
    },
    clearCart: (state) => {
      if (window.confirm("Are you sure you want to clear the whole cart?"))
        return []
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions

export const bookListState = (state: RootState) => state.cartContent

export default CartSlice.reducer
