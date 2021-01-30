import * as React from "react"
import { Link } from "gatsby"
import Template from "../components/template"
import header from '../../assets/images/header.jpg'

const IndexPage = () => {
  return (

    <Template>
      <img src={header} width='100%' alt="" />
      
      <h1>
        Hi :)
        </h1>
        <p>Are you looking for some <Link to="/tools/">tools</Link>?</p>
      <p>This is my <Link to="/blog/">blog</Link>.</p>
      <p>Curious? <Link to="/about/">Read more</Link> about me.</p>
      <p>This should be fun.</p>
      <small>
        Photo by <a href="https://unsplash.com/@boshkov?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ilija Boshkov</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
      </small>
    </Template>
  )
}

export default IndexPage
