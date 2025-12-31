import React from 'react';
import { IoCall } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { GiPaperArrow } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='footer-section' data-reveal="fade-up">
            <div className='footer-content container' data-reveal-stagger="90">
                <div className='footer-logo' data-reveal-item="fade-up">
                    <a href="/">
                        <div className='logo-img-wrap'>
                            <img
                                className='logo-img'
                                src="/images/logo.png"
                                alt="Global PG Services logo"
                                width="320"
                                height="320"
                                loading="lazy"
                                decoding="async"
                            />
                        
                        </div>
                        {/* <h1 className='logo-text'>GLOBAL PG SERVICES</h1> */}
                    </a>
                </div>
                <div className='social-link-wrap' data-reveal-item="fade-up">
                   <div className='title'>follow us</div>
                    <ul className='social-link-list'>
                        <li className='social-link-item'>
                            <a href='https://www.facebook.com/share/17mf1QmPDP/' className="social-link ">
                                <FaFacebookSquare className='facebook-link' />
                            </a>
                        </li>
                        <li className='social-link-item'>
                            <a href='https://www.instagram.com/globalpgservices?utm_source=qr&igsh=MW4yNGlncXc1ZXBodw%3D%3D' className="social-link ">
                                <FaSquareInstagram className='instagram-link' />
                            </a>
                        </li>
                      
                        <li className='social-link-item '>
                            <a href='https://wa.me/918424995088' className="social-link ">
                                <FaWhatsappSquare className='whatsapp-link' />
                            </a>
                        </li>
                       
                    </ul>
                </div>
                <div className='footer-contact' data-reveal-item="fade-up">
                    <div className='title'>contact us</div>
                    <div className='contact-info'>
                        <a href="tel:9851323703" className='contact-num'><IoCall /> <span className='text'>+918424995088</span></a>
                    </div>
                    <div className='contact-info'>
                        <a href="mailto:malamehta370@gamil.com"> <IoMailSharp /> <span>globalpgservices@gmail.com</span></a>
                    </div>
                    <div className='contact-info'>
                        <div className='mb-2 neutral-50'>Head Office</div>
                        <a href="https://www.google.com/maps/place/Global+Pg+Services/@19.1171302,72.8774504,17.06z/data=!4m6!3m5!1s0x3be7c939c5bf4627:0x9118a4c2814e3ec4!8m2!3d19.117076!4d72.8800249!16s%2Fg%2F11yh4qcq4k?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D">
                            <FaLocationDot />
                            <address>
                                Ghanshyam Vijay, Shivaji Nagar JJC, Marol, Andheri East
                                <br />
                                 Mumbai, Maharashtra 400059
                            </address>
                        </a>
                    </div>
                   
                </div>

                <div className='footer-link' data-reveal-item="fade-up">
                    <h3 className='title'>Important Pages</h3>
                    <ul className='footer-menu'>
                        <li className='footer-menu-item'>
                            <NavLink to="/" className="footer-menu-link">
                                <GiPaperArrow />
                                <span className='text'>Home</span>
                            </NavLink>
                        </li>
                        <li className='footer-menu-item'>
                            <NavLink to='/about' className="footer-menu-link">
                                <GiPaperArrow />
                                <span className='text'>about us</span>
                            </NavLink>
                        </li>
                        <li className='footer-menu-item'>
                            <NavLink to='/contact' className="footer-menu-link">
                                <GiPaperArrow />
                                <span className='text'>contact us</span>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer