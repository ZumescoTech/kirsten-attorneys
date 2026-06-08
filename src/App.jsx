import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import RouteSEO from './components/seo/RouteSEO'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Resources from './pages/Resources'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import BailApplicationCapeTown from './pages/blog/BailApplicationCapeTown'
import DuiAttorneyBellville from './pages/blog/DuiAttorneyBellville'
import WhatHappensAfterArrest from './pages/blog/WhatHappensAfterArrest'

export default function App() {
  return (
    <>
      <RouteSEO />
      <Navbar />
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/services"  element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faqs"      element={<FAQs />} />
        <Route path="/contact"   element={<Contact />} />
        <Route path="/blog/bail-application-cape-town"           element={<BailApplicationCapeTown />} />
        <Route path="/blog/dui-attorney-bellville"               element={<DuiAttorneyBellville />} />
        <Route path="/blog/what-happens-after-arrest-south-africa" element={<WhatHappensAfterArrest />} />
      </Routes>
      <Footer />
    </>
  )
}
