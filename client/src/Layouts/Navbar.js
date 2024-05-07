import React from 'react'
import "../Assets/Styles/navbar.css"

export default function Navbar() {
  return (
    <div className='nav-bar-container'>
    <div className='navbar'>
      <div className="logo-content">
          <h3>MyCode Excursion</h3>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>Flights</li>
          <li>Contact Us</li>
          <li>About</li>
        </ul>
      </div>
      <div className='connection'>
          <button className='Signin'>Sign in</button>
          <button className='Signup'>Sign up</button>
      </div>
    </div>
    </div>
  )
}
