import React from "react";
import Navbar from "../Layouts/Navbar";
import banner from "../Assets/video/banner.mp4";
import Footer from "../Layouts/Footer";
import "../Assets/Styles/home.css";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

export default function Home() {
  const TrendingDestination = [
    { tittle: "Dubai", img: "dubai.jpg" },
    { tittle: "Japan", img: "japan.jpg" },
    { tittle: "London", img: "London.jpg" },
  ];
  const imgProfil =[
    {title:"./profil1.png",name:"lucia",country:"brazil" },
    {title:"./profil2.png",name:"christine",country:"Algeria"},
    {title:"./profil1.png",name:"lucia",country:"brazil" },
    {title:"./profil3.png",name:"Pablo",country:"Italy"}
  ]
  //  console.log(localStorage.getItem('token'))
  return (
    <>
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
          <button ><a href="#chooseUS"> see more</a></button>
        </div>
        <div className="form-container">
          <div className="form-item">
            <label>Start</label>
            <input type="text" placeholder="Where do you from" />
          </div>
          <div className="form-item">
            <label>Destination</label>
            <input type="text" placeholder="Where are you going?" />
          </div>
          <div className="form-item date">
            <label>Date</label>
            <FaRegCalendarAlt className="dateIcon" />
            <input
              placeholder="Choose"
              type="date"
              onFocus="(this.type = 'date')"
            />
          </div>
          <div className="form-item">
            <label>
              type <IoIosArrowDown />{" "}
            </label>
            <select type="select" name="type" placeholder="type of travel">
              <option valeur="">Type travel</option>
              <option valeur="one-way">One Way</option>
              <option valeur="round-trip">Round-Trip</option>
            </select>
          </div>
          <div className="button-from">
            <button>
              search flight <FaRegPaperPlane />
            </button>
          </div>
        </div>
      </div>

      {/* Section de pourquoi nous */}
      <section className="chooseUS" id="chooseUS">
        <div className="ChooseUs-img">
          <img src="whyChose.jpg" alt="choose img" />
          <p className="bottom-left-text">
            <FaStar className="star" /> 4.9
          </p>
        </div>
        <div className="ChooseUs-content">
          <div className="title">
            <h2 className="color">Why</h2>
            <h2>Choose Us</h2>
          </div>
          <ul className="reason">
            <li>Reliability: We have a 95% customer satisfaction rate</li>
            <li>
              Competitive prices: Enjoy our special offers with discounts up to
              30%.
            </li>
            <li>Our team is available 24/7 to address your needs.</li>
            <li>
              Over 100 destinations worldwide to fulfill all your travel
              desires.
            </li>
          </ul>
          <p>
            Join the thousands of satisfied customers and give us the
            opportunity to serve you.
          </p>
        </div>
      </section>

      {/* Partie top destionation */}
      <section className="Destinations">
        <div className="trend-title">
          <div className="h1">
            <h1>Trending</h1>
            <h1 className="colors">Destinations</h1> <h1> Now Days</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
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
      </section>

      {/* section des commentaires cards  */}
      <section className="comment-container">
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
          <FiArrowLeftCircle className="btn-comment left"/>
          <FiArrowRightCircle className="btn-comment right"/>
          </div>
        </div>
        <div className="card-container">
          
            {imgProfil.map((item,index)=>{return(<>
              <div className="card-comment" key={index}>
              <img src={item.title} alt="profil" className="profil-img" />
            <div className="content-card">
              <p>Odit deserunt quia et sed repellendus veniam totam. Illo magnam perferendis. Impedit laborum ipsa doloremque rerum. Est rerum aut dolorum et omnis a. </p>
              <div className="content-name">
                <div className="start-content">
              <FaStar className="star" /><FaStar className="star" />
              <FaStar className="star" /><FaStar className="star" />
              <FaStar className="star" /></div>
                <div className="text-card-name">
                  <strong className="name-comment">{item.name}</strong>
                  <p>{item.country}</p>
                </div>
              </div>
            </div>
            </div>
            </>)})}
        </div>
      </section>

      {/* footer section */}
      <Footer/>
    </>
  );
}
