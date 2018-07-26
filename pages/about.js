import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
//import { config } from 'config'

export default class About extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={'lugarinho.tech'}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
		<h1>
          About me
        </h1>
        <p>Hi, my name is Leandro.</p>
		<small><Link to="/">back to home</Link></small>
      </div>
    )
  }
}
