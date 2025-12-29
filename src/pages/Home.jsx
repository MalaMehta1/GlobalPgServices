import React from 'react'
import Banner from '../components/Banner'
import PracticeArea from '../components/PracticeArea'
import Team from '../components/Team'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Contact from '../components/Contact'
import Counter from '../components/Counter'
import FaqAccordion from '../components/FaqAccordion'
import HostelReviews from '../components/HostelReviews'

const Home = () => {
  return (
    <div className='home-page'>
        <Header/>
        <Banner/>
        <Counter/>
        <PracticeArea/>
        <FaqAccordion/>
        <HostelReviews/>
        {/* <Team/> */}
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home