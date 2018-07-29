import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
//import { config } from 'config'
import logo from "../assets/images/me.jpg";

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
        <div style={{float: 'right', padding: 10}}><img src={logo} alt="picture" style={{width: '200px'}}/></div>
        <p>Hi, my name is Leandro. I write software since I was 16 years old (back in 1997).</p>
        <p>In a little more than 20 years, I learned a lot of things about programming and software architecture. 
        I started with an IBM PS/1 PC, with a 486 SX 25 MHz processor (without an arithmetic coprocessor!).</p>
        <p>Nowadays, I work building enterprise software for a big telecommunications company for the past 12 years.
          I know that I still need to learn a lot about programming, and I wish to raise the bar even further with 
          this blog.
        </p>
        
        <p>If you wish to contact me, please fill the form bellow:</p>
        <form name="contact" method="POST" netlify>
  <p>
    <label>Name <input type="text" name="name" style={{width: "50%"}} /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" style={{width: "50%"}}/></label>
  </p>
  <p>
    <label>Message<br/><textarea name="message" style={{width: "80%", height: '200px'}}></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

        <small>last edited: 2018-07-29 15:01</small>        
        <br/>
		    <small><Link to="/">back to home</Link></small>
      </div>
    )
  }
}
