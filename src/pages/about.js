import React from 'react'
import { Link } from "gatsby"
import Template from "../components/template"
import logo from "../../assets/images/me.jpg";

const About = () => {
  return (

    <Template>
      <div>

        <h2>
          About me
        </h2>
        <div style={{ float: 'right', margin: 10, border: '1px solid black' }}><img src={logo} alt="me" style={{ width: '240px' }} /></div>
        <p>Hi, my name is Leandro. I write software since I was 16 years old (back in 1997).</p>
        <p>In a little more than 20 years, I learned a lot of things about programming and software architecture.
        I started with an IBM PS/1 PC, with a 486 SX 25 MHz processor (without an arithmetic coprocessor!).</p>
        <p>Nowadays, I work building enterprise software for a big telecommunications company for the past 12 years.
        I know that I still need to learn a lot about programming, and I wish to raise the bar even further with
        this blog.
        </p>
        <p>I started my journey editing some QBasic programs (gorilla.bas among other ones) and running again to see the change instantly on the screen. It was like magic to me.</p>
        <p>After that, I started creating my own games, never finishing a single one.</p>

        <p>In the 90s, I started programming with PHP and Perl in a small internet provider. After that, I learned Java and all the little technologies
        you would have to learn to build 'corporate' systems (JSP, J2EE, java beans, etc.).
        </p>
        <p>In the 2000s, I switched to the .Net platform, learned C# and have been building enterprise systems since.</p>

        <p>If you wish to contact me, please fill the form bellow:</p>

        <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
          <p>
            <label>Your name: <input type="text" name="name" style={{ width: "50%" }} /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" style={{ width: "50%" }} /></label>
          </p>
          <p>
            <label>Please, write your message below:<br /><textarea name="message" style={{ width: "80%", height: '200px' }}></textarea></label>
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p>
            <button type="submit">Send it!</button>
          </p>
        </form>
        <br />
        <small><Link to="/">back to home</Link></small>
      </div>

    </Template>
  )
}

export default About
