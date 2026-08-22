import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer offwhite">
      <div className="container footer-inner">
        <div>
          <strong>Veya Aesthetic Clinic</strong>
          <p className="muted">Clinically-led care for natural-looking results.</p>
        </div>
        <div>
          <p className="muted">© {new Date().getFullYear()} Veya Aesthetic Clinic</p>
        </div>
      </div>
    </footer>
  )
}
