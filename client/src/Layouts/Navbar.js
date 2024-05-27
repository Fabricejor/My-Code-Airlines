import React  from 'react'
import "../Assets/Styles/navbar.css"
import { useState , useEffect } from 'react';


import { Link ,useLocation ,useParams} from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaPowerOff } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const { flightId } = useParams();

  const [mainColor, setMainColor] = useState('#00a9e6'); // Couleur par défaut
  const [profilIcon, setProfilIcon] = useState('');
  useEffect(() => {
    // Mettez à jour la couleur en fonction de la route actuelle
    if ((location.pathname === '/flights' )||( location.pathname=== `/flights/${flightId}`) ) {
      setMainColor('#C08B7D'); // Exemple de couleur pour la route "/about"
    }
    if (location.pathname===("/profil")){
      const handleClose = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("tokenExpiration")
        localStorage.removeItem("user")

        window.alert("Merci de votre visite au plaisir de vous revoir ");
      }
      setProfilIcon(<Link title='LOG OUT' onClick={handleClose} style={{marginLeft:"200px"}} to={'/'}><button className='profile' style={{backgroundColor:mainColor}} > <FaPowerOff   className='profil-icon' /></button></Link>);
    }else{
      setProfilIcon(<Link title='Profils' style={{marginLeft:"200px"}} to={'/profil'}><button className='profile' style={{backgroundColor:mainColor}} > <CgProfile  className='profil-icon' /></button></Link>);
    }
  }, [location.pathname]);

  const token = localStorage.getItem("token");

  const scrollToFooter = (event) => {
    event.preventDefault();
    const footer = document.getElementById('footer-section');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='nav-bar-container'>
    <div className='navbar'>
      <div className="logo-content">
          <img src="/logo.png" alt="logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li ><Link  className="customLink" to={"/"}>Home</Link></li>
          <li ><Link  className="customLink" to={"/flights"}>Flights</Link></li>
          <li ><Link  className="customLink" to={"/contact"}>Contact Us</Link></li>
          <li ><Link  className="customLink" onClick={scrollToFooter}>About</Link></li>
        </ul>
      </div>
      <div className='connection'>
        {token ? (
        <>
          {profilIcon}
        </>) :(<><button className='Signin'><Link  className="customLink" to={"/Signin"}>Sign In</Link></button>
          <button className='Signup'><Link  className="customLink" to={"/Signup"}>Sign up</Link></button></>)}
          
      </div>
    </div>
    </div>
  )
}
