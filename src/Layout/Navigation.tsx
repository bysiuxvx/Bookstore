import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap"

interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const paths = [
    { name: "Home", path: "/", exact: true },
    { name: "Cart", path: "/cart" },
  ]

  const navMenu = paths.map((item) => (
    <NavItem key={item.name}>
      <NavLink
        key={item.name}
        to={item.path}
        onClick={() => setIsMenuOpen(false)}
        exact={item.exact ? item.exact : false}
      >
        {item.name}
      </NavLink>
    </NavItem>
  ))

  return (
    <Navbar color="light" light expand="md">
      <NavbarToggler onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <Collapse className="navlink-container" isOpen={isMenuOpen} navbar>
        <Nav className="ml-auto" navbar>
          {navMenu}
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Navigation
