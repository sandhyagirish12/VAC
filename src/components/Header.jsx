import React from 'react'

export default function Header({onBookAppointment}){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <a href="#home" className="brand-link" aria-label="Veya Aesthetic Clinic home">
            <img src="/veya-logo.svg" alt="" className="brand-logo" />
            <h1>Veya Aesthetic Clinic</h1>
          </a>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#blog">Blog</a>
          <a href="#testimonials">Testimonials</a>
          <button className="cta" type="button" onClick={onBookAppointment}>Book an Appointment</button>
        </nav>
      </div>
    </header>
  )
}
