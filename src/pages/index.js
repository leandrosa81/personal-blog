import * as React from "react"
import { Link } from "gatsby"
import Template from "../components/template"


const IndexPage = () => {
  return (

    <Template>
      <img src="https://source.unsplash.com/1200x200/?code,programming" width='100%' alt="" />

      <h1>
        Hi :)
        </h1>
        <p>Are you looking for some <Link to="/tools/">tools</Link>?</p>
      <p>This is my <Link to="/blog/">blog</Link>.</p>
      <p>Curious? <Link to="/about/">Read more</Link> about me.</p>
      <p>This should be fun.</p>

    </Template>
  )
}

export default IndexPage
