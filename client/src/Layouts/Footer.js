import React from 'react'
import "../Assets/Styles/footer.css"
import { FaLinkedinIn ,FaInstagram  ,FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { Link ,useLocation ,useParams} from 'react-router-dom';
import { useState , useEffect } from 'react';

export default function Footer() {
    const { flightId } = useParams();

    const location = useLocation();
    const [mainColor, setMainColor] = useState('#00a9e6'); // Couleur par défaut
  
    useEffect(() => {
      // Mettez à jour la couleur en fonction de la route actuelle
      if (location.pathname === '/flights' || location.pathname=== `/flights/${flightId}` ) {
        setMainColor('#C08B7D'); // Exemple de couleur pour la route "/about"
      }
    }, [location.pathname]);
    return (
        <>
            <footer  id="footer-section" >
            <div className='container-foot'>
                <div className='social'>
                    <img src="/logo.png" alt="logo" />
                    <p>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
                    <div className='social-icon'>
                        <FaLinkedinIn onClick={()=>{window.open("https://www.linkedin.com/in/fabrice-ramos-4517831bb/")}} className='icons link' />
                        <BsTwitterX   className='icons twit'/>
                        <FaInstagram onClick={()=>{window.open("https://www.instagram.com/jordan_ramos_disciple_of_god/")}}  className='icons insta'/>
                        <FaGithub  onClick={()=>{window.open("https://github.com/Fabricejor")}} className='icons git'/>
                    </div>
                </div>
                <div className='Products'>
                    <h3>Product</h3>
                    <ul>
                        <li>about</li>
                        <li>career</li>
                        <li>blog</li>
                        <li>special Offers</li>
                    </ul>
                </div>
                <div className='Products'>
                    <h3>Help</h3>
                    <ul>
                        <li>FaQ</li>
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='Products'>
                    <h3>Partner</h3>
                    <ul>
                        <li>Partner hub</li>
                        <li>Affiliates</li>
                        <li>Advertise</li>
                    </ul>
                </div>
                <div className='newsletter'>
                    <h3>newsletter</h3>
                    <form className='input-newsletter'>
                    <input type="email" minLength={10} maxLength={100} required placeholder='Email to subscribe' />
                    <button className='btn-newsletter'style={{backgroundColor:mainColor}}><FaArrowRight  /></button>
                    </form>
                    <p>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
                </div>
            </div>
            <hr/>
            <div className='terms'>
                <p>terms</p>
                <p>privacy</p>
                <p>cookies</p>
                <p>&#169;Fabricejor - 2024</p>
            </div><hr/>
            <div className='terms'>
                <a href="https://github.com/Fabricejor" target='_blank'></a>
            </div>
            </footer>
        </>
    )
}
