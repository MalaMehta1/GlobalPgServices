import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const TeamCard = () => {
    return (
        <div className="team-card flex gap-10 flex-wrap flex-c-c" data-reveal-stagger="120">
            <div className="box shadow-sm" data-reveal-item="fade-up">
                <div className="image-wrapper flex">
                    <img className="img-fluid" src="../images/team/image-2.jpeg" alt="..." />
                </div>
                <div className="box-desc">
                    <h5></h5>
                    <div>Founding partner...</div>
                    <div></div>
                  
                </div>
                <ul className="social flex-c-c gap-3">

                    <li className='social-link-item'>
                        <a href='' className="social-link ">
                            <FaFacebookSquare className='facebook-link' />
                        </a>
                    </li>
                    <li className='social-link-item'>
                        <a href='' className="social-link ">
                            <FaSquareInstagram className='instagram-link' />
                        </a>
                    </li>
                    <li className='social-link-item '>
                        <a href='' className="social-link ">
                            <FaLinkedin className='linkedin-link' />
                        </a>
                    </li>
                </ul>
            </div>
           
           
        </div>

    )
}

export default TeamCard