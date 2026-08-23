import React from 'react'
import {AtSign, Camera, MessageCircle} from 'lucide-react'

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
          <a href="#" aria-label="Veya on Instagram" title="Instagram"><Camera size={19}/></a>
          <a href="#" aria-label="Veya on Facebook" title="Facebook"><AtSign size={19}/></a>
          <a href="#" aria-label="Veya on social updates" title="Social updates"><MessageCircle size={19}/></a>
        </div>
        <div>
          <p className="muted">© {new Date().getFullYear()} Veya Aesthetic Clinic</p>
        </div>
      </div>
    </footer>
  )
}
