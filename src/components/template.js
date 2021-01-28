import React from "react"
import { Link } from "gatsby"
import Headroom from 'react-headroom'
import Typography from '../utils/typography'

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
      <title>Home Page</title>
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
          }}
        >
          <div style={{
            width: 1200,
            paddingTop: 0,
            padding: `10px 7.5px`,
          }}>
            <Link
              to={'/'}
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              leandro lugarinho; <span style={{ color: "#BCBCBC" }}>// dev, thoughts and tools</span>
            </Link>
            <span style={{ float: 'right' }}>
              <Link to="/tools/" style={{
                color: 'white',
                textDecoration: 'none',
                padding: 10
              }}>tools</Link>
              <Link to="/blog/" style={{
                color: 'white',
                textDecoration: 'none',
                padding: 10
              }}>blog</Link>

              <Link to="/about/" style={{
                color: 'white',
                textDecoration: 'none',
                padding: 10
              }}>about me</Link>
            </span>
          </div>
        </Headroom>
        <div
          style={contentStyles}
        >
          <div style={{ width: "1200px" }}>
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}