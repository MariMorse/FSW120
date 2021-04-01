import React from 'react'
import './..Router.css'
import { Link } from 'react-router-dom'

function Nav () {
    const styleLink = { color: 'white', textDecoration:'none', fontSize:'14px'}
    return(
        <div className="NavRouter">
            <ul clasname="NavigationLinks">
            <Link style={linkStyle} to='/Home'><li>Home</li></Link>
            <Link style={linkStyle} to='/Services'><li>Home</li></Link>
            <Link style={linkStyle} to='/About'><li>Home</li></Link>
            </ul>
        </div>
    )
}
export default Nav