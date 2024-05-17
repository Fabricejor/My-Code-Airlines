import React  from 'react'
import "../Assets/Styles/navbar.css"
import { useState , useEffect } from 'react';


import { Link ,useLocation} from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  const location = useLocation();
  const [mainColor, setMainColor] = useState('#00a9e6'); // Couleur par défaut

  useEffect(() => {
    // Mettez à jour la couleur en fonction de la route actuelle
    if (location.pathname === '/flights') {
      setMainColor('#C08B7D'); // Exemple de couleur pour la route "/about"
    }
  }, [location.pathname]);

  const token = localStorage.getItem("token");
  return (
    <div className='nav-bar-container'>
    <div className='navbar'>
      <div className="logo-content">
          <img src="logo.png" alt="logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li ><Link  className="customLink" to={"/"}>Home</Link></li>
          <li ><Link  className="customLink" to={"/flights"}>Flights</Link></li>
          <li ><Link  className="customLink" to={"/contact"}>Contact Us</Link></li>
          <li ><Link  className="customLink" to={"/test"}>About</Link></li>
        </ul>
      </div>
      <div className='connection'>
        {token ? (
        <>
        <Link title='Profils' style={{marginLeft:"200px"}} to={'/profil'}><button className='profile' style={{backgroundColor:mainColor}} > <CgProfile  className='profil-icon' /></button></Link>
        </>) :(<><button className='Signin'><Link  className="customLink" to={"/Signin"}>Sign In</Link></button>
          <button className='Signup'><Link  className="customLink" to={"/Signup"}>Sign up</Link></button></>)}
          
      </div>
    </div>
    </div>
  )
}
