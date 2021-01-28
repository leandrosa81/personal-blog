import React from 'react'
import { Link } from "gatsby"
import Template from "../components/template"

const Tools = () => {
    return (

        <Template>
            <div>

                <h1>
                    Tools
                </h1>                
                <ul>
                    <li><Link to="/tools/taskbar-monitor">taskbar-monitor</Link>: a simple resource monitor for windows that resides on your taskbar.</li>
                </ul>
            </div>

        </Template>
    )
}

export default Tools
