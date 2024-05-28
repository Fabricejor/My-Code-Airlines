import React from 'react'
import cloud from "../Assets/video/error404.mp4"
import "../Assets/Styles/error404.css"
export default function Eror404() {
    return (
        <>
          <div className="error404-container">
          <video autoPlay loop muted className="background-video">
                <source src={cloud} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <img src="/1Error404.png" alt="First " className="firstpic" />
                <img src="/2Error404.png" onClick={()=>{ window.location="/" }} title="Back TO MyCode Airlines" alt="Second" className="secondpic" />
            </div>
            </div>
        </>
    )
}
