import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import Navigation from "./Layout/Navigation"
import Page from "./Layout/Page"

import "./Style/style.scss"

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Page />
      </Router>
    </div>
  )
}

export default App
