import React from 'react'
import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer'
import Preloader from "../Components/Preloader/Preloader";

import "../Assets/Styles/profil.css"
import { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

//icons
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoIosMailUnread } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { Zoom } from "react-awesome-reveal";

export default function Profil() {
    const [tickets, setTickets] = useState([]);
    const userString = localStorage.getItem("user");

    useEffect(() => {
        // Vérifier si l'objet utilisateur existe dans localStorage
        if (userString) {
            // Analyser la chaîne JSON pour obtenir l'objet JavaScript
            const user = JSON.parse(userString);
            const userId = user._id;

            // Afficher l'ID de l'utilisateur avec console.log
            console.log("User ID:", userId);

            // Fonction pour récupérer les tickets
            const fetchTickets = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/api/searchTicketsById/${userId}`);
                    setTickets(response.data);
                } catch (error) {
                    console.error("Erreur lors de la récupération des tickets", error);
                }
            };

            fetchTickets();
        } else {
            console.log("No user found in localStorage");
        }
    }, [userString]);

    const user = JSON.parse(userString);

    

  return (
    <>
      <Preloader />
        <Navbar/>
        <section className='profil-info' >
            <h2 className='profil-title'>Profil info:</h2>
            <hr/>
            <Zoom>
            <div className='profil-card'>
                <Link title='Edit infos?' to={`/profil/${user._id}`} className='personal-info'>
                    
                    <div className='infos'>
                    <h2>{user.nom}</h2>
                    <h4><MdOutlinePhoneIphone />{user.tel}</h4>
                    <h4><IoIosMailUnread />{user.email}</h4>
                    </div>
                    <div className='img-profil'>
                        <img src="profilClient.png" alt="client pic profil" />
                    </div>
                </Link>
                <div className='credit-card'>
                    <img src="/fidelityCard.png" alt="credit card" />
                    <p>Num build: <strong>{user.numPassport}</strong> </p>
                </div>
            </div></Zoom>
        </section>
        <section className='reservations-info'>
        <h2 className='profil-title'>Bookings flights:</h2>
            <hr/>
            <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th># Tickets</th>
                        <th>Passager name</th>
                        <th>Age</th>
                        <th>PassPort ID</th>
                        <th>Destination</th>
                        <th>Price</th>
                        <th>Class</th>
                        <th>option</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.length > 0 ? (
                        tickets.map((ticket, index) => (
                            <tr key={ticket._id}>
                                <td>{ticket.numTicket}</td>
                                <td>{ticket.nom}</td>
                                <td>{ticket.age}</td>
                                <td>{ticket.numPassport}</td>
                                <td>{ticket.destination}</td>
                                <td>{ticket.prix}</td>
                                <td>{ticket.classe}</td>
                                <td><FaEdit  style={{color:"#00a9e6"}}/></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No tickets found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </section>
        <Footer/>      
    </>
  )
}
