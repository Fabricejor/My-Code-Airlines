//modules front end
import React, { useRef, useCallback } from "react";
import { Fade, Slide, Zoom ,Bounce } from "react-awesome-reveal";
import { useState } from "react";
import axios from "axios";

//composant
import Navbar from "../Layouts/Navbar";
import banner from "../Assets/video/banner.mp4";
import Footer from "../Layouts/Footer";
import "../Assets/Styles/home.css";
import Preloader from "../Components/Preloader/Preloader";
//icons
import { FaStar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import { ImArrowRight } from "react-icons/im";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [inputType, setInputType] = useState("text");
  const [errorMessage, setErrorMessage] = useState(''); // État local pour le message d'erreur

  const handleInputFocus = () => {
    setInputType("date");
  };
  const TrendingDestination = [
    { tittle: "Dubai", img: "dubai.jpg" },
    { tittle: "Japan", img: "japan.jpg" },
    { tittle: "London", img: "London.jpg" },
  ];
  const imgProfil = [
    { title: "./profil1.png", name: "lucia", country: "brazil" },
    { title: "./profil2.png", name: "christine", country: "Algeria" },
    { title: "./profil1.png", name: "lucia", country: "brazil" },
    { title: "./profil3.png", name: "Pablo", country: "Italy" },
  ];
  // ! PARTIE DES DESTINATIIONS
  const [destinations] = useState([
    "Kaboul - Afghanistan",
    "Tirana - Albanie",
    "Alger - Algérie",
    "Andorre-la-Vieille - Andorre",
    "Luanda - Angola",
    "Saint John's - Antigua-et-Barbuda",
    "Buenos Aires - Argentine",
    "Erevan - Arménie",
    "Canberra - Australie",
    "Vienne - Autriche",
    "Bakou - Azerbaïdjan",
    "Nassau - Bahamas",
    "Manama - Bahreïn",
    "Dacca - Bangladesh",
    "Bridgetown - Barbade",
    "Minsk - Biélorussie",
    "Bruxelles - Belgique",
    "Belmopan - Belize",
    "Porto-Novo - Bénin",
    "Thimphou - Bhoutan",
    "La Paz - Bolivie",
    "Sarajevo - Bosnie-Herzégovine",
    "Gaborone - Botswana",
    "Brasília - Brésil",
    "Sofia - Bulgarie",
    "Ouagadougou - Burkina Faso",
    "Bujumbura - Burundi",
    "Phnom Penh - Cambodge",
    "Yaoundé - Cameroun",
    "Ottawa - Canada",
    "Praia - Cap-Vert",
    "Bangui - République centrafricaine",
    "N'Djaména - Tchad",
    "Santiago - Chili",
    "Pékin - Chine",
    "Bogotá - Colombie",
    "Moroni - Comores",
    "Kinshasa - République démocratique du Congo",
    "Brazzaville - Congo",
    "San José - Costa Rica",
    "Yamoussoukro - Côte d'Ivoire",
    "Zagreb - Croatie",
    "La Havane - Cuba",
    "Nicosie - Chypre",
    "Prague - République tchèque",
    "Copenhague - Danemark",
    "Djibouti - Djibouti",
    "Roseau - Dominique",
    "Saint-Domingue - République dominicaine",
    "Dili - Timor oriental",
    "Quito - Équateur",
    "Le Caire - Égypte",
    "San Salvador - Salvador",
    "Malabo - Guinée équatoriale",
    "Asmara - Érythrée",
    "Tallinn - Estonie",
    "Addis-Abeba - Éthiopie",
    "Suva - Fidji",
    "Helsinki - Finlande",
    "Paris - France",
    "Libreville - Gabon",
    "Banjul - Gambie",
    "Tbilissi - Géorgie",
    "Berlin - Allemagne",
    "Accra - Ghana",
    "Athènes - Grèce",
    "Saint George's - Grenade",
    "Guatemala - Guatemala",
    "Conakry - Guinée",
    "Bissau - Guinée-Bissau",
    "Georgetown - Guyana",
    "Port-au-Prince - Haïti",
    "Tegucigalpa - Honduras",
    "Budapest - Hongrie",
    "Reykjavik - Islande",
    "New Delhi - Inde",
    "Jakarta - Indonésie",
    "Téhéran - Iran",
    "Bagdad - Irak",
    "Dublin - Irlande",
    "Jérusalem - Israël",
    "Rome - Italie",
    "Kingston - Jamaïque",
    "Tokyo - Japon",
    "Amman - Jordanie",
    "Astana - Kazakhstan",
    "Nairobi - Kenya",
    "Tarawa - Kiribati",
    "Pristina - Kosovo",
    "Koweït - Koweït",
    "Bichkek - Kirghizistan",
    "Vientiane - Laos",
    "Riga - Lettonie",
    "Beyrouth - Liban",
    "Maseru - Lesotho",
    "Monrovia - Libéria",
    "Tripoli - Libye",
    "Vaduz - Liechtenstein",
    "Vilnius - Lituanie",
    "Luxembourg - Luxembourg",
    "Skopje - Macédoine du Nord",
    "Antananarivo - Madagascar",
    "Lilongwe - Malawi",
    "Kuala Lumpur - Malaisie",
    "Malé - Maldives",
    "Bamako - Mali",
    "La Valette - Malte",
    "Majuro - Îles Marshall",
    "Nouakchott - Mauritanie",
    "Port-Louis - Maurice",
    "Mexico - Mexique",
    "Palikir - Micronésie",
    "Chișinău - Moldavie",
    "Monaco - Monaco",
    "Oulan-Bator - Mongolie",
    "Podgorica - Monténégro",
    "Rabat - Maroc",
    "Maputo - Mozambique",
    "Naypyidaw - Myanmar",
    "Windhoek - Namibie",
    "Nauru - Nauru",
    "Katmandou - Népal",
    "Amsterdam - Pays-Bas",
    "Wellington - Nouvelle-Zélande",
    "Managua - Nicaragua",
    "Niamey - Niger",
    "Abuja - Nigéria",
    "Pyongyang - Corée du Nord",
    "Oslo - Norvège",
    "Mascate - Oman",
    "Islamabad - Pakistan",
    "Ngerulmud - Palaos",
    "Jérusalem-Est - Palestine",
    "Panama - Panama",
    "Port Moresby - Papouasie-Nouvelle-Guinée",
    "Asunción - Paraguay",
    "Lima - Pérou",
    "Manille - Philippines",
    "Varsovie - Pologne",
    "Lisbonne - Portugal",
    "Doha - Qatar",
    "Bucarest - Roumanie",
    "Moscou - Russie",
    "Kigali - Rwanda",
    "Basseterre - Saint-Christophe-et-Niévès",
    "Castries - Sainte-Lucie",
    "Kingstown - Saint-Vincent-et-les-Grenadines",
    "Apia - Samoa",
    "Saint-Marin - Saint-Marin",
    "São Tomé - Sao Tomé-et-Principe",
    "Riyad - Arabie saoudite",
    "Dakar - Sénégal",
    "Belgrade - Serbie",
    "Victoria - Seychelles",
    "Freetown - Sierra Leone",
    "Singapour - Singapour",
    "Bratislava - Slovaquie",
    "Ljubljana - Slovénie",
    "Honiara - Îles Salomon",
    "Mogadiscio - Somalie",
    "Pretoria - Afrique du Sud",
    "Séoul - Corée du Sud",
    "Juba - Soudan du Sud",
    "Madrid - Espagne",
    "Colombo - Sri Lanka",
    "Khartoum - Soudan",
    "Paramaribo - Suriname",
    "Mbabane - Eswatini",
    "Stockholm - Suède",
    "Berne - Suisse",
    "Damas - Syrie",
    "Douchanbé - Tadjikistan",
    "Dar es Salaam - Tanzanie",
    "Bangkok - Thaïlande",
    "Dili - Timor-Leste",
    "Lomé - Togo",
    "Nuku'alofa - Tonga",
    "Port-d'Espagne - Trinité-et-Tobago",
    "Tunis - Tunisie",
    "Ankara - Turquie",
    "Achgabat - Turkménistan",
    "Funafuti - Tuvalu",
    "Kampala - Ouganda",
    "Kiev - Ukraine",
    "Abou Dhabi - Émirats arabes unis",
    "Londres - Royaume-Uni",
    "Washington, D.C. - États-Unis",
    "Montevideo - Uruguay",
    "Tachkent - Ouzbékistan",
    "Port-Vila - Vanuatu",
    "Cité du Vatican - Vatican",
    "Caracas - Venezuela",
    "Hanoï - Viêt Nam",
    "Sanaa - Yémen",
    "Lusaka - Zambie",
    "Harare - Zimbabwe",
    "New York-États-Unis",
  ]);

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  // Filtrer les destinations basées sur l'entrée de l'utilisateur et limiter à 10
  const filteredDestinations1 = destinations
    .filter((destination) =>
      destination.toLowerCase().includes(inputValue1.toLowerCase())
    )
    .slice(0, 10);

  const filteredDestinations2 = destinations
    .filter((destination) =>
      destination.toLowerCase().includes(inputValue2.toLowerCase())
    )
    .slice(0, 10);

  const handleChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const sectionRef = useRef(null);

  const switchSection = useCallback((event) => {
    event.preventDefault();
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  //  console.log(localStorage.getItem('token'))
  const today = new Date(); //creation dune variable de type date
  // on passe au formatage
  const dateString = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  // ca c'est pour l'icon calendrier
  const inputRef = useRef();

  const handleIconClick = () => {
    inputRef.current.focus();
  };
  //TRAITEMENT DE LA REQUETE des vols A MONGO DB
  const [flightResults, setFlightResults] = useState([]); // État pour stocker les résultats de la requête

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchData = {
      airport_start: formData.get("airport_start"),
      airport_end: formData.get("airport_end"),
      date_depart: formData.get("date_depart"),
      // Ajoutez d'autres champs de formulaire si nécessaire
    };
    try {
      // Effectuez la requête API vers votre endpoint (par exemple, '/api/flights')
      console.log(searchData.date_depart);
      const response = await axios.get(
        "http://localhost:5000/api/searchFlight",
        { params: searchData }
      );
      setFlightResults(response.data.slice(-10)); // Mettez à jour l'état avec les résultats
      setErrorMessage('');
    } catch (error) {
      console.error("Erreur lors de la récupération des vols :", error);
      setErrorMessage(error.response.data.message);
      setFlightResults([]);
      console.log(errorMessage);
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  //test
  const navigate = useNavigate();
  
  return (
    <>
      <Preloader />
      {/* partie navbar + baniere */}
      <Navbar />
      <div className="banner">
        <div className="banner-video">
          <video autoPlay muted loop id="banner-video">
            <source src={banner} type="video/mp4" />
          </video>
          <div className="overlay"></div>
        </div>
        <div className="banner-text">
          <h1>Limitless horizons with My Code Airline.</h1>
          <button onClick={switchSection}>see more</button>
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-item">
            <label>From</label>
            <input
              type="text"
              list="destinations1"
              placeholder="Airport start"
              name="airport_start"
              value={inputValue1}
              onChange={handleChange1}
            />
            <datalist id="destinations1">
              {filteredDestinations1.map((destination, index) => (
                <option key={index} value={destination} />
              ))}
            </datalist>
          </div>
          <div className="form-item">
            <label>To</label>
            <input
              type="text"
              list="destinations2"
              placeholder="Your destination"
              name="airport_end"
              value={inputValue2}
              onChange={handleChange2}
            />
            <datalist id="destinations2">
              {filteredDestinations2.map((destination, index) => (
                <option key={index} value={destination} />
              ))}
            </datalist>
          </div>
          <div className="form-item date">
            <label>DepartTure</label>
            <FaRegCalendarAlt onClick={handleIconClick} className="dateIcon" />
            <input
              placeholder="Choose"
              ref={inputRef}
              type={inputType}
              onFocus={handleInputFocus}
              min={dateString}
              name="date_depart"
              required
            />
          </div>
          <div className="form-item">
            <label>
              Travel type <IoIosArrowDown />{" "}
            </label>
            <select type="select" name="type" placeholder="type of travel">
              <option value="one-way">One Way</option>
              <option value="round-trip">Round-Trip</option>
            </select>
          </div>
          <div className="button-from">
            <button type="submit">
              search flight <FaRegPaperPlane />
            </button>
          </div>
        </form>
      </div>
      {/* //! Requete a afficher si les informations du formulaire on ete remplis */}
      <div className="flight-container">
      {errorMessage && <Bounce><p style={{ color: 'red' }}>{errorMessage}</p></Bounce>}
        <ul className="flight-list">
          <Slide>
          {flightResults .filter(flight => flight.place > 0).map((flight) => (
            <li className="flight-info" key={flight._id}>
              <div className="flight1">
                <div className="compagnie">{flight.compagnie}</div>{" "}
                <div className="destination">
                  {flight.airport_start} <ImArrowRight /> {flight.airport_end}
                </div>{" "}
              </div>
              <div className="temps">
                {" "}
                <div className="date_depart">
                  {formatDate(flight.date_depart)}{" "}
                </div>
                <div className="dure"> duré: {flight.dure} h</div>
              </div>
              <div className="price">
                <p className="dure">price:</p>
                <div><p>{flight.prix} xof</p></div>
              </div>
              <button
                className="book"
                onClick={()=>{const token = localStorage.getItem("token");if(token){navigate(`/flights/${flight._id}`)}else{alert("Vous devez etre connecte avant de faire de reservation");window.location="/Signin";}}}
              >
                Book{" "}
              </button>
            </li>
          ))}</Slide>
        </ul>
      </div>
      {/* Section de pourquoi nous */}

      <section className="chooseUS" ref={sectionRef} id="chooseUS">
        <div className="ChooseUs-img">
          <Zoom triggerOnce="true">
            <img src="whyChose.jpg" alt="choose img" />
          </Zoom>
          <p className="bottom-left-text">
            <FaStar className="star" /> 4.9
          </p>
        </div>
        <div className="ChooseUs-content">
          <div className="title">
            <h2 className="color">Why</h2>
            <h2>Choose Us</h2>
          </div>
          <Fade cascade>
            <ul className="reason">
              <li>Reliability: We have a 95% customer satisfaction rate</li>
              <li>
                Competitive prices: Enjoy our special offers with discounts up
                to 30%.
              </li>
              <li>Our team is available 24/7 to address your needs.</li>
              <li>
                Over 100 destinations worldwide to fulfill all your travel
                desires.
              </li>
            </ul>
          </Fade>
          <p>
            Join the thousands of satisfied customers and give us the
            opportunity to serve you.
            <br />
            Earum repellendus animi asperiores mollitia harum illo quia dicta.
            Praesentium aperiam amet. Dolorem praesentium sapiente aspernatur
            ipsum dignissimos saepe tempora est. Sapiente ea vero consectetur.
            Incidunt quia quae est. Mollitia consectetur optio quo qui beatae
            nihil aliquid qui.
          </p>
        </div>
      </section>
      {/* Partie top destionation */}
      <section className="Destinations">
        <Slide triggerOnce="true">
          <div className="trend-title">
            <div className="h1">
              <h1>Trending</h1>
              <h1 className="colors">Destinations</h1> <h1> Nowadays</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Slide>
            <div className="card-content">
              {TrendingDestination.map((item, index) => {
                return (
                  <div className="card">
                    <h2>{item.tittle}</h2>
                    <img src={item.img} alt={item.title} />
                  </div>
                );
              })}
              <h1 className="vertical-text">MyCode Airline</h1>
            </div>
          </Slide>
        </Slide>
      </section>

      {/* section des commentaires cards  */}
      <section className="comment-container">
        <Zoom triggerOnce="True">
          <div className="comment-title">
            <div className="title-com">
              <h1>
                They have <strong>trusted</strong> us
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="btn-arrow">
              <FiArrowLeftCircle className="btn-comment left" />
              <FiArrowRightCircle className="btn-comment right" />
            </div>
          </div>
          <div className="card-container">
            {imgProfil.map((item, index) => {
              return (
                <>
                  <div className="card-comment" key={index}>
                    <img src={item.title} alt="profil" className="profil-img" />
                    <div className="content-card">
                      <p>
                        Odit deserunt quia et sed repellendus veniam totam. Illo
                        magnam perferendis. Impedit laborum ipsa doloremque
                        rerum. Est rerum aut dolorum et omnis a.{" "}
                      </p>
                      <div className="content-name">
                        <div className="start-content">
                          <FaStar className="star" />
                          <FaStar className="star" />
                          <FaStar className="star" />
                          <FaStar className="star" />
                          <FaStar className="star" />
                        </div>
                        <div className="text-card-name">
                          <strong className="name-comment">{item.name}</strong>
                          <p>{item.country}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </Zoom>
      </section>

      {/* footer section */}
      <Footer />
    </>
  );
}
