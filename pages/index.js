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
        <h1>
          Hi :)
        </h1>
        <p>Welcome to my blog. I plan to share some articles about software development.</p>
        <img src="https://source.unsplash.com/random/800x200" width='100%' alt="" />
        <small><Link to="/about/">about me</Link></small>
      </div>
    )
  }
}
