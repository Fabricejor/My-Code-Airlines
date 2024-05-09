import React, { useState, useEffect } from 'react';
import axios from "axios"
import {Link}  from "react-router-dom"
import "../../Assets/Styles/signup.css"
import signinVideo from "../../Assets/video/signin.mp4"
import { FaHome } from "react-icons/fa";
// import Instance from '../../Services/Instance';
// import config from '../../Services/config.js';

const SignIn = () => {
    const [data, setData] = useState({ email: '', mdp: '' });
    const [error, setError] = useState('');

    // Vérifie l'expiration du token lors du chargement initial du composant
    // useEffect(() => {
    //     checkTokenExpiration();
    // }, []);

    // Fonction pour vérifier l'expiration du token
    // const checkTokenExpiration = () => {
    //     const tokenExpiration = localStorage.getItem('tokenExpiration');
    //     if (tokenExpiration) {
    //         const expirationTime = parseInt(tokenExpiration);
    //         const currentTime = new Date().getTime();
    //         if (currentTime > expirationTime) {
    //             // Supprimer le token et déconnecter l'utilisateur
    //             localStorage.removeItem('token');
    //             localStorage.removeItem('tokenExpiration');
    //             localStorage.removeItem('user');
    //         }
    //     }
    // };

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // const url = `${config.api_url}/signin`;
            // const { data: response } = await Instance.post(url, data);
            const {data : response} = await axios.post('http://localhost:5000/api/signin',data)
            console.log(response);
            if (response) {
                const user = response.user;

                if (user) {
                    localStorage.setItem("token", response.token);
                    localStorage.setItem("user", JSON.stringify(user));
                    // Stocker l'heure d'expiration du token
                    const expiresIn = 86400; // 1 jour en secondes
                    const expirationTime = new Date().getTime() + expiresIn * 1000;
                    localStorage.setItem("tokenExpiration", expirationTime);
                    window.location = "/";
                }
            } else {
                setError("Réponse invalide du serveur");
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            setError(error);
        }
    };

    return (
        <div className="vid-container">
        <video id="Video1" className="bgvid back" autoPlay="true" muted="muted" preload="auto" loop>
            <source src={signinVideo} type="video/mp4"/>
        </video>
        <div className="inner-container" style={{height:"400px"}}>
          <form className="box">
            <Link to={'/'}><FaHome /></Link>
            <h1>Login</h1>
            <input type="email" name='email'  value={data.email} onChange={handleChange} placeholder="Username"/>
            <input type="password"  name='mdp' onChange={handleChange} value={data.password} placeholder="Password"/>
            <button onClick={handleSubmit} >Login</button>
            {error && <p style={{ color: 'red' }}>{error.response.data.message}</p>}
            <p>Not a member? <span className="signup"><Link to="/Signup">Sign up</Link></span></p>
          </form>
        </div>
      </div> 

            
           
       
    );
};

export default SignIn;