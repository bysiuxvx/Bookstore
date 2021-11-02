import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../Store"

interface IBookProps {
  title?: string
  author?: string
  pages?: number
  cover_url?: string
}

const initialState: IBookProps[] = []

export const BookListSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: {
    setBookList: (state, action: PayloadAction<IBookProps[]>) => {
      return action.payload
    },
  },
})

export const { setBookList } = BookListSlice.actions

export const bookListState = (state: RootState) => state.bookList

export default BookListSlice.reducer
