import React , { useRef, useCallback } from "react";
import { useState } from "react";
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
  const [inputType, setInputType] = useState('text');

  const handleInputFocus = () => {
    setInputType('date');
  };
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

  const sectionRef = useRef(null);

    const switchSection = useCallback((event) => {
        event.preventDefault();
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }, []);
  //  console.log(localStorage.getItem('token'))
  const today = new Date(); //creation dune variable de type date 
  // on passe au formatage 
  const dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  // ca c'est pour l'icon calendrier
  const inputRef = useRef();

  const handleIconClick = () => {
      inputRef.current.focus();
  };
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
          <button onClick={switchSection} >see more</button>
        </div>
        <form className="form-container">
          <div className="form-item">
            <label>From</label>
            <input type="text" placeholder="Airport start" />
          </div>
          <div className="form-item">
            <label>To</label>
            <input type="text" placeholder="Your destination" />
          </div>
          <div className="form-item date">
            <label>DepartTure</label>
            <FaRegCalendarAlt  onClick={handleIconClick} className="dateIcon" />
            <input
              placeholder="Choose"
              ref={inputRef}
              type={inputType}
              onFocus={handleInputFocus}
              min={dateString}
            />
          </div>
          <div className="form-item">
            <label>
            Travel type <IoIosArrowDown />{" "}
            </label>
            <select type="select" name="type" placeholder="type of travel">
              <option valeur="one-way">One Way</option>
              <option valeur="round-trip">Round-Trip</option>
            </select>
          </div>
          <div className="button-from">
            <button type="submit">
              search flight <FaRegPaperPlane />
            </button>
          </div>
        </form>
      </div>
{/* Requete a afficher si les informations du formulaire on ete remplis */}
      {/* Section de pourquoi nous */}
      <section className="chooseUS" ref={sectionRef}  id="chooseUS">
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
            opportunity to serve you.<br/>
            Earum repellendus animi asperiores mollitia harum illo quia dicta. Praesentium aperiam amet. Dolorem praesentium sapiente aspernatur ipsum dignissimos saepe tempora est. Sapiente ea vero consectetur. Incidunt quia quae est. Mollitia consectetur optio quo qui beatae nihil aliquid qui.
          </p>
        </div>
      </section>

      {/* Partie top destionation */}
      <section className="Destinations">
        <div className="trend-title">
          <div className="h1">
            <h1>Trending</h1>
            <h1 className="colors">Destinations</h1> <h1> Nowadays</h1>
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
