import React from 'react'
import "../Assets/Styles/sidebar.css"
import { FaArrowsAltH } from "react-icons/fa";
import { IconName } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <>
        <div className='flex'>
            <div className='bg-green-dark h-screen p-5 pt-8 w-72'>
            <FaArrowsAltH className="bg-white text-green-dark text-rounded"/>
                Sidebar</div>
            <div className='p-7'> <h1 className='text-2xl font-semibold'>Home</h1></div>
        </div>   
    </>
  )
}
