import React from 'react'
import { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import banner from "../Assets/video/flight.mp4";
import Preloader from "../Components/Preloader/Preloader";

import { IoIosArrowDown } from "react-icons/io";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../Assets/Styles/flight.css"

export default function Flights() {
    const location = useLocation();
  const [mainColor, setMainColor] = useState('#00a9e6'); // Couleur par défaut

  useEffect(() => {
    // Mettez à jour la couleur en fonction de la route actuelle
    if (location.pathname === '/flights') {
      setMainColor('#C08B7D'); // Exemple de couleur pour la route "/about"
    }
  }, [location.pathname]);
    const [inputType, setInputType] = useState('text');

  const handleInputFocus = () => {
    setInputType('date');
  };
  return (
    <div>
        <Preloader/>
        <Navbar/>
        <div className="banner">
        <div className="banner-video">
          <video autoPlay muted loop id="banner-video">
            <source src={banner} type="video/mp4" />
          </video>
          <div className="overlay"></div>
        </div>
        <div className="banner-text">
          <h1 style={{color:mainColor}} >Embark on your journey to secure 
the ideal getaway.</h1>
          
        </div>
        <div className="form-container">
          <div className="form-item">
            <label>From</label>
            <input type="text" placeholder="Airport Start" />
          </div>
          <div className="form-item">
            <label>To</label>
            <input type="text" placeholder="Your Destination" />
          </div>
          <div className="form-item date">
            <label>Departure</label>
            <FaRegCalendarAlt className="dateIcon" style={{color:mainColor}}/>
            <input
              placeholder="Choose"
              type={inputType}
      onFocus={handleInputFocus}
            />
          </div>
          <div className="form-item">
            <label>
              type <IoIosArrowDown />{" "}
            </label>
            <select type="select" name="type" placeholder="type of travel">
              <option valeur="">Type travel</option>
              <option valeur="one-way">One Way</option>
              <option valeur="round-trip">Round-Trip</option>
            </select>
          </div>
          <div className="button-from">
            <button style={{background:mainColor , color:'white'}}>
              search flight <FaRegPaperPlane />
            </button>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}
