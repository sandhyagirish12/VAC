import React from 'react'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <h1>Veya Aesthetic Clinic</h1>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#blog">Blog</a>
          <a href="#testimonials">Testimonials</a>
          <a className="cta" href="#contact">Book an Appointment</a>
        </nav>
      </div>
    </header>
  )
}
