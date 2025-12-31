import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { IoCall } from "react-icons/io5";

const Header = () => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);
    const [menuisActive, setmenuIsActive] = useState(false);

    const toggleHamburger = () => {
        setmenuIsActive(!menuisActive);
    };

    const closeMenu = () => setmenuIsActive(false);


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsActive(scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (menuisActive) {
            document.body.classList.add("noscroll");
        } else {
            document.body.classList.remove("noscroll");
        }

        // Cleanup function to ensure class is removed when component unmounts
        return () => {
            document.body.classList.remove("noscroll");
        };
    }, [menuisActive]);

    // Always close the mobile menu when the route changes (covers back/forward + navigation)
    useEffect(() => {
        closeMenu();
    }, [location.pathname]);


    return (
        <header className={`header-wrap ${isActive ? "active" : ""}`}>
            <div className='site-header container'>
                <div className='header-logo'>
                    <NavLink to = "/" onClick={closeMenu}>
                        <div className='logo-img-wrap' style={{"color":"white"}}>
                            <img
                                className='logo-img'
                                src="/images/logo.png"
                                alt="Global PG Services logo"
                                width="128"
                                height="128"
                                decoding="async"
                                fetchpriority="high"
                            />
                        </div>
                    </NavLink>
                </div>
                <div className={`navbar ${menuisActive ? "" : "hide-navbar"}`}>
                    <ul className='menu'>
                        <li className='menu-item'>
                            <NavLink to = "/" className='menu-link' onClick={closeMenu}>home</NavLink>
                        </li>
                        <li className='menu-item'>
                            <NavLink to = "/about" className='menu-link' onClick={closeMenu}>about us</NavLink>
                        </li>
                  
                        <li className='menu-item'>
                            <NavLink to = "/contact" className='menu-link' onClick={closeMenu}>contact us</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='header-contact'>
                    <p className='text'>get free consultation</p>
                    <p className='text'><span className='call-icon'><IoCall /></span><a href="tel:+918424995088" className='contact-num'>+918424995088 </a></p>
                </div>
                <div className='hamburger-menu'>
                    <div
                        className={`hamburger ${menuisActive ? "is-active" : ""}`}
                        onClick={toggleHamburger}
                        id='hamburger'
                    >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;

