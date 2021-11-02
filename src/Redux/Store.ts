import { configureStore } from "@reduxjs/toolkit"
import BookListReducer from "./reducers/BookListSlice"
import CartSlice from "./reducers/CartSlice"

const store = configureStore({
  reducer: {
    bookList: BookListReducer,
    cartContent: CartSlice,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
