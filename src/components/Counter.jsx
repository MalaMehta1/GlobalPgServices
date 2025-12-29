import React from 'react'
import { FaBed } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const Counter = () => {
    return (
        <div className="counter-container" data-reveal="fade-up">
            <div className="counter-box" data-reveal-stagger="120">
                <div className="counter-item" data-reveal-item="fade-up">
                    <div className='icon-wrapper'>
                        <FaBuilding />
                    </div>
                    <div className="counter-text">
                        <span>100+</span>
                        <p>Rooms</p>
                    </div>
                </div>
                <div className="counter-item" data-reveal-item="fade-up">
                    <div className='icon-wrapper'>
                        <FaBed />
                        </div>
                        <div className="counter-text">
                            <span>300+</span>
                            <p>Number of Beds</p>
                        </div>
                    
                </div>
                <div className="counter-item" data-reveal-item="fade-up">
                    <div className='icon-wrapper'>
                       <FcLike />
                          </div>
                        <div className="counter-text">
                            <span>500+</span>
                            <p>Happy Clients</p>
                        </div>
                  
                </div>
            </div>
        </div>
    )
}

export default Counter