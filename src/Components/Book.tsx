/* tslint:disable */

import * as React from "react"
import { Container, Row, Button } from "reactstrap"
import { useAppDispatch } from "../Redux/hooks/hooks"
import { addToCart } from "../Redux/reducers/CartSlice"

interface IBookProps {
  title?: string
  author?: string
  pages?: number
  cover_url?: string
  id: number
}

interface IProps {
  book: IBookProps
}

const Book: React.FunctionComponent<IProps> = ({ book }) => {
  const dispatch = useAppDispatch()
  return (
    <Container className="book-container">
      <Row>
        <h2>{book.title}</h2>
      </Row>
      <Container className="cover-container">
        <img
          src={book.cover_url}
          alt={`${book.title} cover`}
          className="img-fluid"
        />
      </Container>
      <Row>
        <strong>
          <p>{book.author}</p>
        </strong>
      </Row>
      <Row>
        <p>{book.pages} pages</p>
      </Row>
      <Row>
        <Button
          className="btn-primary"
          onClick={() => dispatch(addToCart(book))}
        >
          Add
        </Button>
      </Row>
    </Container>
  )
}

export default Book
