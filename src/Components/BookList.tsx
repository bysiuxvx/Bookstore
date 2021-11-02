/* tslint:disable */

import React from "react"

import { useAppSelector } from "../Redux/hooks/hooks"
import Book from "./Book"

interface IBookList {}

const BookList: React.FunctionComponent<IBookList> = () => {
  const bookList = useAppSelector((state) => state.bookList)

  return (
    <>
      {bookList.length > 0 &&
        bookList.map((book: any) => {
          return <Book key={book.id} book={book} />
        })}
    </>
  )
}

export default BookList
