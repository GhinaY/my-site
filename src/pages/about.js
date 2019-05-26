import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Header headerText="About Ghina" />
    <p>Such wow. Very React.</p>
  </div>
)
