import React from 'react'
import { Link } from 'react-router-dom';
import '../Assets/Styles/home.css'
// import Sidebar from '../Layouts/Sidebar'

function Home() {
    const tabIcon =[
        {icon:"client.jpg",title:"gestion des clients",link:"/home/clients"},
        {icon:"flight_gestion.jpg",title:"gestion des vols",link:"/home/Vols"},
        {icon:"passager.jpg",title:"gestion des reservations",link:"/home/Voyagers"},
        {icon:"graphique.jpg",title:"Etudes des graphiques",link:"/home/Graphiques"},
        
    ]
    return (
        <>
           <h1>homepage</h1>
           <div className='home-content'>
                {tabIcon.map((item, index) => (
                    <Link className='icon-content' key={index} to={`${item.link}`}>
                        <img src={`./${item.icon}`} alt={item.title} />
                        <h3>{item.title}</h3>
                    </Link>
                ))}
                
            </div>
        </>
    )
}

export default Home;