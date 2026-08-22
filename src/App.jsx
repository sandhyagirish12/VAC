import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="site-root">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <a className="sticky-cta" href="#contact">Book an Appointment</a>
    </div>
  )
}
