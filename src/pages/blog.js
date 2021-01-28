import React from 'react'
import { Link } from "gatsby"
import Template from "../components/template"

const Blog = () => {
    return (

        <Template>
            <div>

                <h1>
                    Hi :)
             </h1>
                <p>Welcome to my blog. I plan to share some articles and random thoughts about software development.</p>
                <p>This should be fun.</p>

                <p>To be published soon.</p>

                <small><Link to="/about/">about me</Link></small>
            </div>

        </Template>
    )
}

export default Blog
