import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Assets/Styles/sidebar.css";
import {  FaSearch, FaPowerOff, FaRegBookmark } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdConnectingAirports, } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";
import { GrUserAdmin } from "react-icons/gr";
import { BsAirplaneEngines, BsPersonVcard, BsGraphUpArrow } from "react-icons/bs";
import { SiMicrosoftexcel, SiGoogleclassroom } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";
import { FaPersonCirclePlus } from "react-icons/fa6";

//importation des differetent menu
import Home from "../Pages/Home"
import UserMenu from "../Components/user/UserMenu";
import FlightMenu from "../Components/flight/FlightMenu";
import PassagersMenu from "../Components/passager/PassagersMenu";
import BookingMenu from "../Components/Connection/book/BookingMenu";
import Graph1 from "../Components/graph/Graph1";
import Admin from "../Components/admin/Admin";
export default function Sidebar() {

  const handleClose = () => {
    localStorage.removeItem("token")
    window.location = "/"
  }
  const location = useLocation();
  console.log(location.pathname);

  //!fonction pour le rendu du contenue
  const contentRender = () => {
    switch (location.pathname) {
      case "/home/clients":
          return (<UserMenu/>);
        // break;
        case "/home/Vols":
          return (<FlightMenu/>);
        // break;  
        case "/home/Voyagers":
          return (<PassagersMenu/>);
        // break;   
        case "/home/Reservation":
          return (<BookingMenu/>);
        // break;
        case "/home/Graphiques":
          return (<Graph1/>);
        // break; 
        case "/home/Admin":
          return (<Admin/>);
        // break;
        case "/home":
          return (<Home/>);
        // break; 
      default:
              <Home/>
        break;
    }
  }


  const [open, setOpen] = useState(true);// hooks pour connaitre letat du button qui va reduire le sidebar
  const [submenuOpen, setSubmenuOpen] = useState(false);// hooks pour connaitre letat des sous menus
  const Menus = [
    { title: "Admin", icon: <GrUserAdmin /> },
    { title: "Vols", icon: <BsAirplaneEngines /> },
    { title: "clients", icon: <BsPersonVcard />, spacing: true },
    {
      title: "Graphiques",
      icon: <SiMicrosoftexcel />,
      subMenu: true,
      subMenuItems: [
        { title: "Graphiques 1", icon: <VscGraph /> },
        { title: "Graphiques 2", icon: <BsGraphUpArrow /> },
        { title: "Graphiques 3", icon: <SiGoogleclassroom /> },
      ]
    },
    { title: "Voyagers", icon: <FaPersonCirclePlus /> },
    { title: "Reservation", icon: <FaRegBookmark /> },
    { title: "log out", icon: <FaPowerOff />, function: handleClose },
  ];

  return (
    <>
      <div className="flex">
        <div className={`sidebar bg-purple-dark h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-700 ease-out  relative`}>
          <IoIosArrowDroprightCircle
            className={`bg-white text-purple-dark text-3xl 
                                      rounded-full absolute 
                                      -right-3 top-9 border-purple-dark
                                      border  cursor-pointer
                                      ${open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="infline-flex">
            <MdConnectingAirports className={`bg-amber-300 text-4xl rounded cursor-pointer   block float-left mr-2 duration-500 ${open && "rotate-[360deg]"} `} />
            <h1 className={`text-white origin-left font-light text-2xl ${!open && "scale-0 hidden"}`} >Admin dashboard</h1>
          </div>
          <div
            className={`flex items-center rounded-md bg-searchfield mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
            <FaSearch
              className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
            <input type={"search"} placeholder="search"
              className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} />
          </div>
          <ul className="pt-2">
            {Menus.map((menu, index) => {
              return (<>
                <li key={index} className={` text-gray-400 text-sm flex items-center 
                	                          gap-x-4 cursor-pointer p-2
                                          hover:bg-searchfield rounded-md 
                                            ${menu.spacing ? "mt-9" : "mt-2"}`} onClick={menu.function}>
                  <span className="text-2xl block float-left" component={<Link to={`/home/${menu.title}`} />} >{menu.icon ? menu.icon : <BiSolidDashboard />}</span>
                  <Link to={`/home/${menu.title}`} className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`} onClick={menu.function} >{
                    menu.title}
                  </Link>
                  {!open && <span className="scale-0 hidden hover:block ">test</span>}
                  {menu.subMenu && (
                    <IoIosArrowDropdown className={`${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)} />
                  )}</li>
                {menu.subMenu && submenuOpen && open && (
                  <ul>
                    {menu.subMenuItems.map((subMenuItems, index) => {
                      return (
                        <li key={index} className={` text-gray-400 text-sm flex items-center 
                	                          gap-x-4 cursor-pointer p-2 px-5
                                          hover:bg-searchfield rounded-md `}>
                          <span className="text-2xl block float-left" >{subMenuItems.icon ? subMenuItems.icon : <BiSolidDashboard />}</span>

                          {subMenuItems.title}
                        </li>)
                    })}
                  </ul>
                )}
              </>)
            })}
          </ul>
        </div>
        <div className="componant">
          {
            contentRender()
          }
        </div>
      </div>
    </>
  );
}
