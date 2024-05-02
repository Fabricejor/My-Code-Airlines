import React, {useState} from "react";
import "../Assets/Styles/sidebar.css";
import { FaArrowsAltH,FaSearch  } from "react-icons/fa";
import { MdConnectingAirports ,MdOutlineArrowDropDown} from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";


export default function Sidebar() {
  const [open,setOpen]=useState(true);// hooks pour connaitre letat du button qui va reduire le sidebar
  const Menus =[
    {title:"Admin"},
    {title: "Vols"},
    {title: "clients" ,spacing:true},
    {title: "Graphiques",
      subMenu:true,
      subMenuItems:[
        {title:"Graphiques 1"},
        {title:"Graphiques 2"},
        {title:"Graphiques 3"},
      ]},
      {title:"Voyagers"},
      {title:"Reservation"},
      {title:"log out"},
  ];

  return (
    <>
      <div className="flex">
        <div className={`bg-purple-dark h-screen p-5 pt-8 ${open ? "w-72":"w-20"} duration-700 ease-out  relative`}>
          <FaArrowsAltH
            className={`bg-white text-purple-dark text-3xl 
                                      rounded-full absolute 
                                      -right-3 top-9 border-purple-dark
                                      border  cursor-pointer
                                      ${open && "rotate-180"}`}
          onClick={()=>setOpen(!open)}
          />
          <div className="infline-flex">
          <MdConnectingAirports className={`bg-amber-300 text-4xl rounded cursor-pointer   block float-left mr-2 duration-500 ${open && "rotate-[360deg]"} `}/>
            <h1 className={`text-white origin-left font-light text-2xl ${!open && "scale-0"}`} >Admin Dashboard</h1>
          </div>
          <div 
            className={`flex items-center rounded-md bg-searchfield mt-6 ${!open ? "px-2.5" : "px-4" } py-2`}>
          <FaSearch  
            className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
          <input type={"search"} placeholder="search" 
            className={`text-base bg-transparent w-full text-white focus:outline-none ${open && "hidden"}`} />
          </div>
          <ul className="pt-2">
            {Menus.map((menu,index) => {
              return(
              <li key={index} className={` text-gray-400 text-sm flex items-center 
                	                          gap-x-4 cursor-pointer p-2
                                          hover:bg-searchfield rounded-md 
                                            ${menu.spacing ? "mt-9" :"mt-2"}`}>
                <span className="text-2xl block float-left" ><BiSolidDashboard/></span>
                <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>{menu.title}</span>
                {menu.subMenu && {
                  <MdOutlineArrowDropDown />
                }}
              </li>)
            })}
          </ul>
        </div>
        <div className="p-7">
          {" "}
          <h1 className="text-2xl font-semibold">Home</h1>
        </div>
      </div>
    </>
  );
}
