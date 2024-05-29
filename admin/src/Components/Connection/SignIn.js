import React, { useState, useEffect } from 'react';
import axios from "axios"
import {Link}  from "react-router-dom"
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
                    window.location = "/home";
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
        <div className='layout-signin'>
            <div className='form-signin'>
                <form onSubmit={handleSubmit}>
                    <div className='parent-form-input'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            className='input'
                            type='email'
                            name='email'
                            id='email'
                            value={data.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='parent-form-input'>
                        <label htmlFor='mdp'>Mot de passe:</label>
                        <input
                            className='input'
                            type='password'
                            name='mdp'
                            id='mdp'
                            value={data.mdp}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button onClick={handleSubmit} className='btn-form-connection' id='btn-signin'>
                        Se connecter
                    </button>
                </form>

            </div>
            <div>
                {error && <h1 style={{ color: 'red' }}>{error.response.data.message}</h1>}
            </div>
        </div>
    );
};

export default SignIn;