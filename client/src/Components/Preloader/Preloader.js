import React,{useEffect} from 'react'
import { useState } from 'react';
import { useLocation ,useParams} from 'react-router-dom';
import "../../Assets/Styles/preloader.css"
import { preLoaderAnim } from './Animation';
import { Fade,Ja, Zoom} from "react-awesome-reveal";

export default function Preloader() {
  const { flightId } = useParams();

  const location = useLocation();
  const [mainColor, setMainColor] = useState('#00a9e6');
  useEffect(() => {
    // Mettez à jour la couleur en fonction de la route actuelle
    if (location.pathname === `/flights` || location.pathname=== `/flights/${flightId}` ) {
      setMainColor('#C08B7D'); // Exemple de couleur pour la route "/about"
    }
  }, [location.pathname,flightId]);
  useEffect(()=>{
    preLoaderAnim()
  },[]);
  return (
    <div className='preloader' style={{backgroundColor:mainColor}}>
      <div className='texts-content'>
        <Fade cascade>
        <span className='anim-text'>Flight</span>
        <span className='anim-text'>With</span>
        <span className='anim-text'>MyCode-Airlines</span>
        <Zoom duration={3000}>
        <img src="/avion.png" alt="avion" style={{height:"60px"}} /></Zoom>
        </Fade>
      </div>
    </div>
  )
}
