import * as React from "react"
import { Route, Switch } from "react-router-dom"
import { Container } from "reactstrap"
import Home from "../Pages/Home"
import Cart from "../Pages/Cart"
import Checkout from "../Pages/Checkout"

interface IPageProps {}

const Page: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <Container className="main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Container>
  )
}

export default Page
