import React from 'react'
import {FaFacebookF, FaInstagram, FaXTwitter} from 'react-icons/fa6'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">
            <img src="/veya-logo.svg" alt="" className="footer-logo" />
            <strong>Veya Aesthetic Clinic</strong>
          </div>
          <p>Clinically-led care for natural-looking results.</p>
        </div>
        <div className="socials">
          <a href="#" aria-label="Veya on Instagram" title="Instagram"><FaInstagram size={19}/></a>
          <a href="#" aria-label="Veya on Facebook" title="Facebook"><FaFacebookF size={19}/></a>
          <a href="#" aria-label="Veya on X" title="X"><FaXTwitter size={19}/></a>
        </div>
        <div>
          <p className="muted">© {new Date().getFullYear()} Veya Aesthetic Clinic</p>
        </div>
      </div>
    </footer>
  )
}
