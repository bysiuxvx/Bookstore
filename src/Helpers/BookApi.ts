import React, { useEffect } from "react"
import { useAppDispatch } from "../Redux/hooks/hooks"
import { setBookList } from "../Redux/reducers/BookListSlice"

interface IBookApiProps {}

const BookApi: React.FunctionComponent<IBookApiProps> = (props) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    booksRequest()
  })

  const booksRequest = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/book")
      const responseJson = await response.json()

      if (responseJson.data) {
        dispatch(setBookList(responseJson.data))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return null
}

export default BookApi
