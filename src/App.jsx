import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Modal from './components/Modal'
import AppointmentForm from './components/AppointmentForm'

export default function App(){
  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('show')
        }
      })
    },{threshold:0.12})
    document.querySelectorAll('.reveal, .reveal-item').forEach(el=>{
      el.classList.add('reveal')
      obs.observe(el)
    })
    return ()=> obs.disconnect()
  },[])
  const [showBooking, setShowBooking] = useState(false)
  return (
    <div className="site-root">
      <Header onBookAppointment={()=> setShowBooking(true)} />
      <main>
        <Hero onBookAppointment={()=> setShowBooking(true)} />
        <About />
        <Services onBookAppointment={()=> setShowBooking(true)} />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <button className="sticky-cta" onClick={(e)=>{e.preventDefault(); setShowBooking(true)}} aria-label="Book an appointment" title="Book an appointment" aria-haspopup="dialog"> 
        <span className="cta-icon">📅</span>
      </button>
      {showBooking && (
        <Modal onClose={()=> setShowBooking(false)}>
          <AppointmentForm onClose={()=> setShowBooking(false)} />
        </Modal>
      )}
    </div>
  )
}
