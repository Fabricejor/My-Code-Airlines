import React from 'react'
import { Link } from 'react-router-dom';

import icon from "../Assets/Imgs/logoplane.png"
import profil from "../Assets/Imgs/profil.png"

//icons
import { FaArrowsAltH, FaSearch ,FaPowerOff ,FaRegBookmark} from "react-icons/fa";
import { MdConnectingAirports, } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";
import { GrUserAdmin } from "react-icons/gr";
import { BsAirplaneEngines ,BsPersonVcard,BsGraphUpArrow } from "react-icons/bs";
import { SiMicrosoftexcel,SiGoogleclassroom  } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";
import { FaPersonCirclePlus } from "react-icons/fa6";

export default function Sidebar() {
    //fonction parts
    const handleClose = () => {
        localStorage.removeItem("token")
        window.location = "/"
    }
    const Menus = [
        { title: "Admin" , icon: <GrUserAdmin />},
        { title: "Vols" ,icon : <BsAirplaneEngines />},
        { title: "clients",icon:<BsPersonVcard />, spacing: true },
        {
          title: "Graphiques",
          icon:<SiMicrosoftexcel />,
          subMenu: true,
        //   subMenuItems: [
        //     { title: "Graphiques 1" ,icon:<VscGraph />},
        //     { title: "Graphiques 2",icon:<BsGraphUpArrow /> },
        //     { title: "Graphiques 3" ,icon:<SiGoogleclassroom />},
        //   ]
        },
        { title: "Voyagers" ,icon:<FaPersonCirclePlus />},
        { title: "Reservation" ,icon:<FaRegBookmark/>},
        { title: "log out",icon:<FaPowerOff /> ,function:handleClose },
      ];
    return (
        <div className='sidebar'>
            <div className='logoContainer'>
                <img src={icon} style={{ width: 50, height: 48 }} alt="logo" />
                <h2 className='title'>dashboard</h2>
            </div>
            <div className='burgerContainer'>
                <div className='burgerTrigger'></div>
                <div className='burgerMenu'></div>
            </div>
            <div className='profilContainer'>
                <img src={profil} alt="profil" className='profil'/>
                <div className="profilContents">
                    <p className='name'>Hello,Admin👋</p>
                    <p>Fabricejordan2001@gmail.com</p>
                </div>
            </div>
            <div className='contentContainer'>
                <ul>
                    {Menus.map((menu,index) => {
                      return (
                        <>
                        <li>
                        {menu.icon}
                        <a href="#">{menu.title}</a>
                        </li>
                        </>
                      )  
                    })}
                </ul>
            </div>
        </div>
    )
}
