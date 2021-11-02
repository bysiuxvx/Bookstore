import * as React from "react"
import { Container } from "reactstrap"

import BookApi from "../Helpers/BookApi"
import BookList from "../Components/BookList"

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <BookApi />
      <h2>Our books</h2>
      <Container className="home-container" fluid>
        <BookList />
      </Container>
    </>
  )
}

export default Home
