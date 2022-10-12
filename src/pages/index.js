import * as React from "react"
import { Link } from "gatsby"
import Template from "../components/template"
 
const IndexPage = () => {
  return (

    <Template style={{textAlign: "center"}}>
<div className="center-this">
      <h1>
        Leandro Lugarinho
      </h1>
        <p>Are you looking for some <Link to="/tools/">tools</Link>?</p>
      <p>This is my <Link to="/blog/">blog</Link>.</p>
      <p>Curious? <Link to="/about/">Read more</Link> about me.</p>      
      <small>
        2021 | Leandro Lugarinho 
      </small>
      </div>
    </Template>
  )
}

export default IndexPage
