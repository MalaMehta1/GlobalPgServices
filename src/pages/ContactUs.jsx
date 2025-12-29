import React from 'react'
import Header from '../components/common/Header'
import Contact from '../components/Contact'
import Footer from '../components/common/Footer'
import PageBanner from '../components/common/PageBanner'
import { useLocation } from 'react-router-dom'
import ContactSection from '../components/ContactSection'

const ContactUs = () => {
  const location = useLocation();

  const pathname = location.pathname.startsWith("/")
  ? location.pathname.substring(1)
  : location.pathname;
  return (
    <div className='contact-page'>
        <Header/>
        <PageBanner title={pathname}/>
        <ContactSection/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default ContactUs