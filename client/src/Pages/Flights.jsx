import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import banner from "../Assets/video/flight.mp4";
import Preloader from "../Components/Preloader/Preloader";

import axios from 'axios';

import { GoBookmark } from "react-icons/go";
import "../Assets/Styles/flight.css";
import { useParams } from "react-router-dom";

export default function Flights() {
  const { flightId } = useParams();
  const location = useLocation();
  const [mainColor, setMainColor] = useState("#00a9e6"); // Couleur par défaut
  const [flightDetails, setFlightDetails] = useState(null); // État pour les détails du vol

  useEffect(() => {
    // Mettez à jour la couleur en fonction de la route actuelle
    if (
      location.pathname === "/flights" ||
      location.pathname === `/flights/${flightId}`
    ) {
      setMainColor("#C08B7D"); // Exemple de couleur pour la route "/about"
    }
  }, [location.pathname]);
  //infromations cachés du vols 
  useEffect(() => {
    if (flightId) {
      // Fonction pour récupérer les détails du vol
      const fetchFlightDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/findFlight/${flightId}`);
          setFlightDetails(response.data);
        
        } catch (error) {
          console.error("Erreur lors de la récupération des détails du vol", error);
        }
      };

      fetchFlightDetails();
    }
  }, [flightId]);
  useEffect(() => {
    // Vous pouvez vérifier si flightDetails n'est pas null avant d'essayer d'accéder à sa propriété 'place'
    if (flightDetails && flightDetails.place) {
      console.log(flightDetails.place + ' ' + flightDetails.compagnie);
    }
  }, [flightDetails]);
  //traitement donnés passager plus item
  const [num, setNum] = useState(0);
  return (
    <div>
      <Preloader />
      <Navbar />
      <div className="banner">
        <div className="banner-video">
          <video autoPlay muted loop id="banner-video">
            <source src={banner} type="video/mp4" />
          </video>
          <div className="overlay"></div>
        </div>
        <div className="banner-text">
          <h1 style={{ color: mainColor }}>
            Embark on your journey to secure the ideal getaway.
          </h1>
        </div>
        {/* ce formulaire génere le nombre de input necessaire pour enregistrer les */}
        <form className="form-container">
          <div className="form-item">
            <label>Passagers Numbers</label>
            <input
              type="Number"
              min={1}
              max={3}
              placeholder="Number of passager"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              required
            />
          </div>
          <div className="button-from">
            {/* Ajouter une fonction dans le button pour traiter les donnés du deuxieme formulaire */}
            <button
              style={{ background: mainColor, color: "white" }}
            >
              finish Booking
              <GoBookmark />
            </button>
          </div>
        </form>
      </div>
      {/* renvoyer chaque element dans un tableau qui sera dans enrigstré dans  */}
      <section className="passager-container">
        {Array.from({ length:  Math.min(num, 3)  }).map((_, index) => (
          <div className="form-passager"key={index} >
            <div className="form-item">
              <label>Passager {index + 1}</label>
              <input type="text" placeholder={`Passenger ${index + 1} name`} required />
            </div>
            <div  className="form-item">
              <label>passport {index + 1}</label>
              <input type="text" placeholder={`Passenger ${index + 1} PassPort ID`} required/>
            </div>
            <div  className="form-item">
      <label>age {index + 1}</label>
      <input type="Number" min={5} max={90} placeholder={`Passenger ${index + 1} year old`} required />
    </div>
    
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
