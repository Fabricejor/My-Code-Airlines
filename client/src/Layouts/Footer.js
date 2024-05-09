import React from 'react'
import "../Assets/Styles/footer.css"
import { FaLinkedinIn ,FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer >
            <div className='container-foot'>
                <div className='social'>
                    <img src="./logo.png" alt="logo" />
                    <p>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
                    <div className='social-icon'>
                        <FaLinkedinIn className='icons' />
                        <BsTwitterX   className='icons'/>
                        <FaFacebookF  className='icons'/>
                    </div>
                </div>
                <div className='Products'>
                    <h3>Product</h3>
                    <ul>
                        <li>about</li>
                        <li>career</li>
                        <li>blog</li>
                        <li>special Offers</li>
                    </ul>
                </div>
                <div className='Products'>
                    <h3>Help</h3>
                    <ul>
                        <li>FaQ</li>
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='Products'>
                    <h3>Partner</h3>
                    <ul>
                        <li>Partner hub</li>
                        <li>Affiliates</li>
                        <li>Advertise</li>
                    </ul>
                </div>
                <div className='newsletter'>
                    <h3>newsletter</h3>
                    <div className='input-newsletter'>
                    <input type="email"  placeholder='Email to subscribe' />
                    <FaArrowRight className='btn-newsletter'/>
                    </div>
                    <p>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
                </div>
            </div>
            <hr/>
            <div className='terms'>
                <p>terms</p>
                <p>privacy</p>
                <p>cookies</p>
            </div>
            </footer>
        </>
    )
}
