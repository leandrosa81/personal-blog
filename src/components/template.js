import React from "react"
import { Link } from "gatsby"
import Headroom from 'react-headroom'
import { Helmet } from "react-helmet"
import Typography from '../utils/typography'
import "./global.css"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",

}

const contentStyles = {
  display: "grid",
  justifyContent: "center",
  padding: 0,
  margin: 0
}


export default function Template({ children }) {

  return (
    <main style={pageStyles}>
      <Helmet>
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="HandheldFriendly" content="true"/>
          <title>Lugarinho.tech</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>      
      <div>

        <Headroom

          wrapperStyle={{
            marginBottom: 10,
          }}


          style={{
            background: '#252525',
            padding: 20,
            display: "grid",
            justifyContent: "center",
            width: "100%"
          }}
        >
          <div 
          className="header" style={{
            maxWidth: "1200px",
            paddingTop: 0,
            padding: `10px 5px 10px 5px`,
          }}>
            <Link
              to={'/'}
              style={{
                color: 'white',
                textDecoration: 'none',
                marginTop: "50px",
                
              }}
            >
              <span style={{   }}>
              leandro lugarinho;
              <br className="responsive" />
              <span style={{ color: "#BCBCBC" }}>// dev, thoughts and tools</span>
              </span>
            </Link>
            <span style={{ float: 'right' }}>
              <nav className="navigation">
                <ul className="nav-menu">
                  <li><Link to="/tools/" style={{
                    color: 'white',
                    textDecoration: 'none',
                    
                  }}>tools</Link></li>
                  <li><Link to="/blog/" style={{
                    color: 'white',
                    textDecoration: 'none',
                    
                  }}>blog</Link></li>
                  <li><Link to="/about/" style={{
                    color: 'white',
                    textDecoration: 'none',
                    
                  }}>about me</Link></li>
                </ul>
                <div className="nav-toggle" onClick={(e) =>{
                  e.preventDefault();
                  document.querySelector(".nav-toggle").classList.toggle('active');;
                  document.querySelector(".nav-menu").classList.toggle('active');;
                  document.querySelector(".nav-overlay").classList.toggle('active');;                  
                } }>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </div>
              </nav>              
            </span>
          </div>
        </Headroom>
        <div
          style={contentStyles}
        >
          <div style={{ width: "100%", maxWidth: "1200px",paddingLeft: 20, paddingRight: 20 }}>
            {children}
          </div>
        </div>
      </div>
      <div className="nav-overlay" onClick={(e) =>{
                  e.preventDefault();
                  document.querySelector(".nav-toggle").classList.toggle('active');;
                  document.querySelector(".nav-menu").classList.toggle('active');;
                  document.querySelector(".nav-overlay").classList.toggle('active');;                  
                } }></div>
    </main>
  )
}
/*
//menu toggle
(function($){
  $('.nav-toggle').click(function(e){
      e.preventDefault();
      $('.nav-toggle').toggleClass('active');
      $('.nav-menu').toggleClass('active');
      $('.nav-overlay').toggleClass('active');
  })
  $('.nav-overlay').click(function(e){
      e.preventDefault();
      $('.nav-toggle').toggleClass('active');
      $('.nav-menu').toggleClass('active');
      $('.nav-overlay').toggleClass('active');
  })
})(jQuery);*/