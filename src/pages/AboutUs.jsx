import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageBanner from '../components/common/PageBanner'
import { useLocation } from 'react-router-dom'
import OurMission from '../components/OurMission'
import Team from '../components/Team'
import PracticeArea from '../components/PracticeArea'
import SectionHeader from '../components/common/SectionHeader'
import WhyChooseUs from '../components/whyChooseUs'
import ContactSection from '../components/contactSection'

const AboutUs = () => {
  const location = useLocation();

  const pathname = location.pathname.startsWith("/")
    ? location.pathname.substring(1)
    : location.pathname;
  return (
    <div className='about-page'>
      <Header />
      <PageBanner title={pathname} />
      <div className='our-mission-container container pb-5'>
          <OurMission />
       
      </div>
     <div>
      <WhyChooseUs/>
     </div>
      <div className='container'>
        {/* <Team /> */}
        <ContactSection/>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs