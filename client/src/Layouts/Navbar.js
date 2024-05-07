import React from 'react'
import "../Assets/Styles/navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav-bar-container'>
    <div className='navbar'>
      <div className="logo-content">
          <img src="logo.png" alt="logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li><Link  className="customLink" to={"/"}>Home</Link></li>
          <li><Link  className="customLink" to={"/"}>Flights</Link></li>
          <li><Link  className="customLink" to={"/contact"}>Contact Us</Link></li>
          <li><Link  className="customLink" to={"/"}>About</Link></li>
        </ul>
      </div>
      <div className='connection'>
          <button className='Signin'><Link  className="customLink" to={"/Signin"}>Sign In</Link></button>
          <button className='Signup'>Sign up</button>
      </div>
    </div>
    </div>
  )
}
