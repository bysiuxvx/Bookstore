import * as React from "react"
import { Button, Col, Container, Row } from "reactstrap"
import { NavLink } from "react-router-dom"
import { useAppDispatch } from "../Redux/hooks/hooks"
import { useAppSelector } from "../Redux/hooks/hooks"
import { removeFromCart, clearCart } from "../Redux/reducers/CartSlice"

interface ICartProps {}

const Cart: React.FunctionComponent<ICartProps> = (props) => {
  const dispatch = useAppDispatch()

  const state = useAppSelector((state) => state.cartContent)

  return (
    <Container className="cart-container">
      <h2>Cart contents</h2>
      {state.length > 0 &&
        state.map((item) => (
          <Container>
            <Row className="cart-item" key={item.id}>
              <Col xs="9" className="item-summary">
                <img src={item.cover_url} alt={`${item.title} cover`} />{" "}
                <p>{item.title}</p>
              </Col>
              <Col xs="3">
                <Button
                  onClick={() => dispatch(removeFromCart(item.id))} // NIE DZIAŁA
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </Container>
        ))}

      <Row className="cart-buttons">
        <Col xs="6">
          {state.length > 0 ? (
            <Button color="danger" onClick={() => dispatch(clearCart())}>
              Clear cart
            </Button>
          ) : (
            <Button color="warning">
              <NavLink to="/">Back to home</NavLink>
            </Button>
          )}
        </Col>
        <Col xs="6">
          <Button color="success" disabled={state.length > 0 ? false : true}>
            <NavLink to={"/checkout"}>Checkout</NavLink>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart
