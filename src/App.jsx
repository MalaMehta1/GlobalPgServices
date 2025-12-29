import React from 'react'
import Home from './pages/Home'
import "./assets/scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import PageNotFound from './pages/PageNotFound';
import ContactUs from './pages/ContactUs';
import PracticeArea from './pages/PracticeArea';
import ScrollRevealManager from './components/common/ScrollRevealManager';
const App = () => {
  return (
    <div>
      <Router>
        <ScrollRevealManager />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/featureproperties' element={<PracticeArea />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App;