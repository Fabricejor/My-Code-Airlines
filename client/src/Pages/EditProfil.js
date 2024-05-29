import React, { useState, useEffect } from 'react';
import Navbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';
import "../Assets/Styles/editprofil.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Slide } from "react-awesome-reveal";
export default function EditProfil() {
  const navigate = useNavigate();
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);

  // Utilisation de useState pour gérer les valeurs des inputs
  const [nom, setNom] = useState(user.nom || '');
  const [email, setEmail] = useState(user.email || '');
  const [tel, setTel] = useState(user.tel || '');
  const [numPassport, setNumPassport] = useState(user.numPassport || '');
  const [age, setAge] = useState(user.age || '');

  const handleSubmit = async (e) => {
    e.preventDefault();

      // Afficher une boîte de dialogue de confirmation
      const confirmUpdate = window.confirm("Êtes-vous sûr de vouloir mettre à jour vos informations ?");
      if (confirmUpdate) {
    try {
      // Récupérer l'ID utilisateur depuis l'objet user
      const userId = user._id;

      // Envoyer les données mises à jour à l'API
      const response = await axios.put(`http://localhost:5000/api/Edituser/${userId}`, {
        nom,
        email,
        tel,
        numPassport,
        age
      });
      
      console.log(response.data);
      if (response.data){
        const EditedUser = response.data.user;
      
      console.log(EditedUser.nom);
      // Mettre à jour les informations de l'utilisateur dans le localStorage
      localStorage.setItem("user", JSON.stringify(EditedUser));}

      // Rediriger l'utilisateur vers la page de profil
      navigate('/profil');
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil", error);
    }
}else{
    alert("Erreur lors de la mise à jour du profil");
}
  };

  return (
    <>
      <Navbar />
      <section className='edit-container'>
        <h2 className='profil-title'>Edit profil:</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <Slide style={{width:"100%"}}>
          <div className='profil-form-edit'>
            <label>Nom</label>
            <input
              type="text"
              value={nom}
              maxLength={30}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>
          </Slide>
          <Slide style={{width:"100%"}}>
          <div className='profil-form-edit'>
            <label>Email</label>
            <input
              type="email"
              value={email}
              minLength={10}
              maxLength={60}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          </Slide>
          <Slide style={{width:"100%"}}>
          <div className='profil-form-edit'>
            <label>Tel (+221)</label>
            <input
              type="number"
              value={tel}
            //   minLength={3}
              onChange={(e) => setTel(e.target.value)}
              required

            />
          </div>
          </Slide>
          <Slide style={{width:"100%"}}>
          <div className='profil-form-edit'>
            <label>Passport ID</label>
            <input
              type="text"
              value={numPassport}
              minLength={10}
              maxLength={20}
              onChange={(e) => setNumPassport(e.target.value)}
              required
            />
          </div>
          </Slide>
          <Slide style={{width:"100%"}}>
          <div className='profil-form-edit'>
            <label>Age</label>
            <input
              type="number"
              min={18}
              max={90}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>        
          </Slide>
          <Slide style={{width:"100%"}}>
          <div className='form-btn-edit'>
            <Link className='link-to-profil' to="/profil">Cancel</Link>
            <button type="submit">Submit</button>
          </div>
          </Slide>

        </form>
      </section>
      <Footer />
    </>
  );
}
