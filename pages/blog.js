import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
  
export default class Blog extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "lugarinho.tech"},
            {"name": "keywords", "content": "technology, development, software, blog, lugarinho"},
          ]}
        />        
        <h1>
          Hi :)
        </h1>
        <p>Welcome to my blog. I plan to share some articles and random thoughts about software development.</p>
        <p>This should be fun.</p>

        <ul>
        <li>2018-07-26: <a href="2018-07-26-welcome.html">Welcome!</a></li>
        </ul>
        
        <small><Link to="/about/">about me</Link></small>
      </div>
    )
  }
}
