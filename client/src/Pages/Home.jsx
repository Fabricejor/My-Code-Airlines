import React from "react";
import Navbar from "../Layouts/Navbar";
import banner from "../Assets/video/banner.mp4";
import "../Assets/Styles/home.css";



export default function Home() {
  const TrendingDestination= [
    {tittle :"Dubai", img:"dubai.jpg",},
    {tittle :"Japan", img:"japan.jpg",},
    {tittle :"London", img:"London.jpg",},
  ];

  return (
    <>
    {/* partie navbar + baniere */}
      <Navbar />
      <div className="banner">
        <div class="banner-video">
          <video autoPlay muted loop id="banner-video">
            <source src={banner} type="video/mp4" />
          </video>
          <div className="overlay"></div>
        </div>
        <div className="banner-text">
          <h1>Des horizons sans limite avec My Code Airline.</h1>
          <p>test banner text</p>
        </div>
        <div className="form-container">
          <div className="form-item">
            <label>Start</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Destination</label>
            <input type="text" />
          </div>
          <div className="form-item">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="form-item">
            <label>type</label>
            <input type="text" />
          </div>
          <div className="button-from">
            <button>search flight</button>
          </div>
        </div>

      </div>

{/* Section de pourquoi nous */}
      <section className="chooseUS">
        <div className="ChooseUs-img">
          <img src="whyChose.jpg" alt="choose img" />
        </div>
        <div className="ChooseUs-content">
          <div className="title">
          <h2 className="color">Why</h2><h2>Choose Us</h2>
          </div>
          <ul className="reason">
            <li>Reliability: We have a 95% customer satisfaction rate</li>
            <li>Competitive prices: Enjoy our special offers with discounts up to 30%.</li>
            <li>Our team is available 24/7 to address your needs.</li>
            <li>Over 100 destinations worldwide to fulfill all your travel desires.</li>
          </ul>
          <p>Join the thousands of satisfied customers and give us the opportunity to serve you.</p>
        </div>
      </section>


      {/* Partie top destionation */}
    <section className="Destinations">
      <div className="trend-title">
        <div className="h1"><h1>Trending</h1><h1 className="colors">Destinations</h1> <h1> Now Days</h1></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="card-content">
          
            {TrendingDestination.map((item , index) => {
              return(
                <div className="card">
                  <h2>{item.tittle}</h2>
                  <img src={item.img} alt={item.title} />
                  </div>
              )
            })}
          <h1 className="vertical-text">MyCode Airline</h1>
      </div>
    </section>
    </>
  );
}
