import React,{ useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import banner from "../Assets/video/flight.mp4";
import Preloader from "../Components/Preloader/Preloader";

import axios from 'axios';
//animation yi
import { Slide } from "react-awesome-reveal";
import { GoBookmark } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

import "../Assets/Styles/flight.css";
import { useParams } from "react-router-dom";

export default function Flights() {
  const { flightId } = useParams();
  const location = useLocation();
  const [mainColor, setMainColor] = useState("#00a9e6"); // Couleur par défaut
  const [flightDetails, setFlightDetails] = useState(null); // État pour les détails du vol
  const [passengers, setPassengers] = useState([]);
    const [travelType, setTravelType] = useState("one-way");
    const [classe, setClasse] = useState("economique");
    const [promoCode, setPromoCode] = useState("");
    const userString = localStorage.getItem("user");
    let userId = null;
    let userMail=null;

    if (userString) {
        const user = JSON.parse(userString);
        userId = user._id;
        userMail=user.email;
        console.log("User ID:", userId , "Email:", userMail);
    } else {
        console.log("No user found in localStorage");
    }
    //
    
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
   // Gestion des changements dans le formulaire des passagers
   const handlePassengerChange = (index, field, value) => {
    const newPassengers = [...passengers];
    newPassengers[index] = { ...newPassengers[index], [field]: value };
    setPassengers(newPassengers);
};

const handleFinishBooking = async (e) => {
    e.preventDefault();
    const tickets = passengers.map((passenger) => ({
        id_user: userId,
        flight_id: flightId,
        numTicket: Math.floor(Math.random() * 1000000),
        nom: passenger.name,
        numPassport: passenger.passport,
        age: parseInt(passenger.age),
        type: travelType,
        classe: classe,
        prix: flightDetails?.prix,
        destination: `${flightDetails?.airport_start} - ${flightDetails?.airport_end}`,
        promotion: promoCode
    }));

    try {
        const response = await axios.post('http://localhost:5000/api/addManyTickets',  tickets );
        console.log("Tickets ajoutés avec succès :", response.data);
         // Envoyer les données de réservation à l'API Bookmails
         const emailData = {
          email: userMail,
          reservations: tickets
      };
      const emailResponse = await axios.post('http://localhost:5000/api/Bookmails', emailData);
      console.log("Email envoyé avec succès :", emailResponse.data);

        window.alert('Réservation réussie');
        window.location.href = '/profil';
    } catch (error) {
        console.error("Erreur lors de l'ajout des tickets", error);
    }
};
// console.log(passengers[0]?.name);
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
        <form className="form-container"onSubmit={handleFinishBooking}>
          <div className="form-item">
            <label>Passagers Numbers</label>
            <input
              type="Number"
              min={1}
              max={3}
              placeholder="Number of passager"
              value={num}
              onChange={(e) => {
                setNum(e.target.value);
                setPassengers(Array.from({ length: e.target.value }, () => ({})));
            }}
              required
            />
          </div>
          <div className="form-item">
            <label>
              Travel type <IoIosArrowDown />{" "}
            </label>
            <select type="select" value={travelType} onChange={(e) => setTravelType(e.target.value)} name="type" placeholder="type of travel">
              <option value="one-way">One Way</option>
              <option value="round-trip">Round-Trip</option>
            </select>
          </div>
          <div className="form-item">
            <label>
              Class
            </label>
            <select type="select" name="classe" placeholder="class travel"  value={classe} onChange={(e) => setClasse(e.target.value)}>
              <option value="economique">Economic class</option>
              <option value="affaire">Business Class</option>
              <option value="première">Fisrt Class</option>
            </select>
          </div>
          <div className="form-item">
            <label>Promo Code</label>
            <input
              type="text"
              placeholder="Any promotional code?"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
          </div>
          <div className="button-from" type="submit">
            {/* Ajouter une fonction dans le button pour traiter les donnés du deuxieme formulaire */}
            <button style={{ background: mainColor, color: "white" }}>
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
            <Slide>
            <div className="form-item">
              <label>Passager {index + 1}</label>
              <input type="text" placeholder={`Passenger ${index + 1} name`} maxLength={100}  value={passengers[index]?.name || ""}  onChange={(e) => handlePassengerChange(index, 'name', e.target.value)} required />
            </div>
            <div  className="form-item">
              <label>passport {index + 1}</label>
              <input type="text" placeholder={`Passenger ${index + 1} PassPort ID`} minLength={4} value={passengers[index]?.passport || ""} onChange={(e) => handlePassengerChange(index, 'passport', e.target.value)} required/>
            </div>
            <div  className="form-item">
      <label>age {index + 1}</label>
      <input type="Number" min={5} max={90} placeholder={`Passenger ${index + 1} year old`} value={passengers[index]?.age || ""}  onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}required />
    </div></Slide>
    
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
