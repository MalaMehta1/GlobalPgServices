import React from 'react';
import PracticeAreaCard from './Cards/PracticeAreaCard';
import SectionHeader from './common/SectionHeader';
import { NavLink } from 'react-router-dom';

const PracticeArea = () => {
    const practiceAreas = [
        {

            titleTxt: "single sharing",
            subTitleTxt:"",
           imgSrc: "images/featureProperties/single2.jpeg",
            rent:"₹ 30,000/mo - ₹ 40,000/mo"
        },
          {
            titleTxt: "triple sharing",
            subTitleTxt:"",
             imgSrc: "images/featureProperties/triple3.jpeg",
               rent:"₹ 10,000/mo - ₹ 13,000/mo"
        },
        {
            titleTxt: "single sharing",
            subTitleTxt:"",
            imgSrc: "images/featureProperties/single1.jpeg",
            rent:"₹ 30,000/mo - ₹ 40,000/mo"
        },
        {
            titleTxt: "double sharing",
            subTitleTxt:"",
            imgSrc: "images/featureProperties/double2.jpeg",
              rent:"₹ 14,000/mo - ₹ 18,000/mo"
        },
        {
            titleTxt: "double sharing",
            subTitleTxt:"",
            imgSrc: "images/featureProperties/double1.jpeg",
               rent:"₹ 14,000/mo - ₹ 18,000/mo"
        },
        {
            titleTxt: "single sharing",
            subTitleTxt:"",
             imgSrc: "images/featureProperties/single3.jpeg",
            rent:"₹ 30,000/mo - ₹ 40,000/mo"
        },
        {
            titleTxt: "single sharing",
            subTitleTxt:"",
             imgSrc: "images/featureProperties/single5.jpeg",
              rent:"₹ 30,000/mo - ₹ 40,000/mo"
        },
        {
            titleTxt: "double sharing",
            subTitleTxt:"",
             imgSrc: "images/featureProperties/double3.jpeg",
              rent:"₹ 14,000/mo - ₹ 18,000/mo"
        },
        {
            titleTxt: "double sharing",
            subTitleTxt:"",
             imgSrc: "images/featureProperties/double4.jpeg",
             rent:"₹ 14,000/mo - ₹ 18,000/mo"
        },
        {
            titleTxt: "single sharing",
            subTitleTxt:"",
             imgSrc: "images/featureProperties/single6.jpeg",
              rent:"₹ 30,000/mo - ₹ 40,000/mo"
        },
      
        {
            titleTxt: "triple sharing",
            subTitleTxt:"",
             imgSrc: "images/featureProperties/triple1.jpeg",
               rent:"₹ 10,000/mo - ₹ 13,000/mo"
        },
        {
            titleTxt: "triple sharing",
            subTitleTxt:"",
             imgSrc: "images/featureProperties/triple2.jpeg",
              rent:"₹ 10,000/mo - ₹ 13,000/mo"
        },
        
    ];

    return (
        <div className='practice-area' data-reveal="fade-up">
            <SectionHeader 
                titleTxt="Featured Properties" 
                subTitleTxt="Experience thoughtfully designed spaces that combine elegance, comfort, and exceptional hospitality." 
            />
            <div className='card-container container' data-reveal-stagger="90">
                {practiceAreas.map((area, index) => (
                    <PracticeAreaCard 
                        key={index} 
                        titleTxt={area.titleTxt} 
                        imgSrc={area.imgSrc} 
                        subTitleTxt={area.subTitleTxt}
                        rent={area.rent}
                    />
                ))}
            </div>
            <div className='view-more container py-6 flex-c-c'>
                <NavLink to='/featureProperties' className='btn btn-primary'>
                    Click for more
                </NavLink>
            </div>
        </div>
    );
};

export default PracticeArea;
