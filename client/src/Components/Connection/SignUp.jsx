import React ,{useState}from 'react'
import "../../Assets/Styles/signup.css"
import signupVideo from "../../Assets/video/signup.mp4"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FaHome } from "react-icons/fa";

function SignUp() {
    //connexion au backend
  
    const [errorMessage, setErrorMessage] = useState(''); // État local pour le message d'erreur
    const [formData, setFormData] = useState({
      nom: '',
      email: '',
      tel: '',
      mdp: '',
      numPassport: '',
      age: ''
  });
  //recuperer les inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};
  //on envoie les données a l'api
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      const reponse = await axios.post('http://localhost:5000/api/signup', formData); 
      console.log(reponse.data.message); 
      if(reponse.data.message){
        alert("You welcome your account has been created successfully");
        window.location = "/";
      }
        
    
  } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      setErrorMessage(error.response.data.message);
  }
};


  return (
    <div>
      <div className="vid-container">
  <video id="Video1" className="bgvid back" autoPlay="true" muted="muted" preload="auto" loop>
      <source src={signupVideo} type="video/mp4"/>
  </video>
  <div className="inner-container"  >
    <form  onSubmit={handleSubmit} className="box">
    <Link to={'/'} style={{left:"50%" ,position:"relative",transform:"translateX(-50%)"}}><FaHome style={{color:"#00a9e6"}} /></Link>
      <h1>Register</h1>
      <input type="text" name='nom' value={formData.nom}  onChange={handleChange} placeholder="Name" required/>
      <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder="Email"required/>
      <input type="number"name='tel' value={formData.tel} onChange={handleChange} placeholder="Number"required/>
      <input type="text" name='numPassport' value={formData.numPassport} onChange={handleChange} placeholder="Passport ID"required/>
      <input type="number" name='age' value={formData.age} onChange={handleChange} placeholder="age"required/>
      <input type="password" name='mdp' value={formData.mdp}  onChange={handleChange} placeholder="Password"required/>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button type='submit'>Sign up</button>
      <p>already have account? <span className="signup" ><Link to="/signin">Sign in</Link></span></p>
    </form>
  </div>
</div>
    </div>
  )
}

export default SignUp