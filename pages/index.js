import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

export default class Index extends React.Component {
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
        <img src="https://source.unsplash.com/1200x200/?code" width='100%' alt="" />
        
        <h1>
          Hi :)
        </h1>
        <p>This is my <Link to="/blog/">blog</Link>.</p>
        <p>Curious? <Link to="/about/">Read more</Link> about me.</p>
        <p>This should be fun.</p>
              
      </div>
    )
  }
}
