import React from "react";
import { useState, useEffect ,useRef } from "react";
import "../../Assets/Styles/flight.css";
import { TbEdit } from "react-icons/tb";
import { FaTrash } from "react-icons/fa";
import { AiFillFolderAdd } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Zoom } from "react-awesome-reveal";
import axios from "axios"
import { Slide } from "react-awesome-reveal";

export default function UserMenu() {
  const [flights, setFlights] = useState([]);
  const [view, setView] = useState("default"); // 'default', 'search', 'create'
  const [selectedOption, setSelectedOption] = useState('');
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
  const handleSearchClick = () => {
    setView("search");
  };

  const handleCreateClick = () => {
    setView("create");
  };

  const handleCancelClick = () => {
    setView("default");
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/allUsers");
        const data = await response.json();
        setFlights(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des vols:", error);
      }
    };

    fetchFlights();
  }, []);
  //  console.log(localStorage.getItem('token'))
  const today = new Date(); //creation dune variable de type date
  // on passe au formatage
  const dateString = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  
  //! ENVOIE DE CREATE CONTENT POUR CREER DES VOLS
  
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      compagnie: formData.get('compagnie'),
      airport_start: formData.get('aiport_start'),
      airport_end: formData.get('airport_end'),
      date_depart: formData.get('date_depart'),
      date_arrivee: formData.get('date_arrivee'),
      prix: formData.get('prix'),
      place: formData.get('place'),
      dure: generateRandomNumber(1, 24), // Génère une durée aléatoire entre 1 et 10 heures
      distance: generateRandomNumber(500, 10000), // Génère une distance aléatoire entre 500 et 10000 km
    };

    try {
      const response = await axios.post('http://localhost:5000/api/addFlight', data);
      console.log('Réponse de l\'API:', response.data);
      alert("succesfully added flight");
      window.location.href = "/home/Vols";
      // Gérez la réponse de l'API ici, par exemple, afficher un message de succès ou réinitialiser le formulaire
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données à l\'API:', error);
      // Gérez l'erreur ici, par exemple, afficher un message d'erreur
    }
  };
  return (
    <div>
      <Slide direction="right" className="functions-content">
        {view === "default" && (
          <>
            <div className="icon" onClick={handleSearchClick}>
              <FaSearch /> search
            </div>
            <div className="icon" onClick={handleCreateClick}>
              <AiFillFolderAdd /> create
            </div>
          </>
        )}
        {view === "search" && (
          <div className="search-content">
            <input type="text" placeholder="Search..." />
            <button onClick={handleCancelClick} className="cancel-btn" >Cancel</button>
          </div>
        )}
        {view === "create" && (
          <div className="create-content">
            <form onSubmit={handleSubmit}>
              <div  className="form-group">
                <input 
                type="text" 
                placeholder="Compagnie"
                name="compagnie"
                required />
              </div>
              <div  className="form-group">
                <select name="aiport_start" required>
                  {destinations.map((destination, index) => (
                    <option key={index} value={destination}>
                      {destination}
                    </option>
                  ))}
                </select>
                <select name="airport_end" required>
                  {destinations.map((destination, index) => (
                    <option key={index} value={destination}>
                      {destination}
                    </option>
                  ))}
                </select>
              </div>
              <div  className="form-group">
                <input
                  placeholder="Choose"
                  type="date"
                  min={dateString}
                  name="date_depart"
                  required
                />{" "}
                <input
                  placeholder="Choose"
                  type="date"
                  min={dateString}
                  name="date_arrivee"
                  required
                />
              </div>
              <div  className="form-group">
              <input 
              type="number" 
              required 
              name="prix" 
              placeholder="prix" 
              min={100000} />
              <input
                type="number"
                placeholder="place dispo"
                name="place"
                min={15}
                max={80}
                required
              /></div>
              <button className="btn-submit" type="submit">
                submit
              </button>
              {/* Ajoutez d'autres champs de formulaire selon vos besoins */}
            </form>
            <button onClick={handleCancelClick} className="cancel-btn">Cancel</button>
          </div>
        )}
      </Slide>
      <Zoom className="flight-content">
        <table className="table-flight">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th >tel</th>
              <th > numPassport</th>
              <th>age</th>
              <th colSpan={2}>Options</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight._id}>
                <td>{flight.nom}</td>
                <td>{flight.email}</td>
                <td>{flight.tel}</td>
                <td>{flight.numPassport}</td>
                <td>{flight.age}ans</td>
                <td>
                  <TbEdit />
                </td>
                <td>
                  <FaTrash />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Zoom>
    </div>
  );
}
