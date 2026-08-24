import React, {useState} from 'react'
import {Mail, MapPin, Phone} from 'lucide-react'
import {FaFacebookF, FaInstagram, FaXTwitter} from 'react-icons/fa6'

export default function Contact(){
  const [status, setStatus] = useState(null)
  const today = new Date().toISOString().split('T')[0]
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    setStatus('sending')
    try{
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(Object.fromEntries(form.entries()))
      })
      const result = await res.json().catch(()=> ({}))
      if(res.ok) setStatus('sent')
      else setStatus(result.error || 'Unable to send your request.')
    }catch(err){
      setStatus('The booking service is unavailable. Run this through Vercel to enable email delivery.')
    }
  }

  return (
    <section id="contact" className="section reveal">
      <div className="container two-col">
        <div>
          <h3>Contact</h3>
          <p>Book a consultation or ask a question. We respond to messages within 48 hours.</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>Name<input name="name" required/></label>
            <label>Phone<input name="phone" type="tel" required/></label>
            <label>Email<input name="email" type="email" required/></label>
            <label>Appointment date<input name="appointment_date" type="date" min={today} required/></label>
            <label>Message<textarea name="message" rows="4" required/></label>
            <button className="btn primary" type="submit">Send Message</button>
            {status === 'sending' && <p>Sending…</p>}
            {status === 'sent' && <p>Thanks — we will be in touch.</p>}
            {status && status !== 'sending' && status !== 'sent' && <p>{status}</p>}
          </form>
        </div>
        <div className="card offwhite map-card">
          <h4>Our Location</h4>
          <div className="contact-details">
            <p><MapPin size={17}/><span>18 Willow Lane, Fitzroy VIC 3065<br/>Australia</span></p>
            <p><Phone size={17}/><a href="tel:+61391234567">+61 3 9123 4567</a></p>
            <p><Mail size={17}/><a href="mailto:hello@veyaesthetic.com">hello@veyaesthetic.com</a></p>
          </div>
          <div className="map-placeholder">
            <iframe title="Veya location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95373531550407!3d-37.81627974202161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1600000000000" width="100%" height="180" style={{border:0,borderRadius:8}} allowFullScreen="" loading="lazy"></iframe>
          </div>
          <div className="socials">
            <a href="#" aria-label="Veya on Instagram" title="Instagram"><FaInstagram size={19}/></a>
            <a href="#" aria-label="Veya on Facebook" title="Facebook"><FaFacebookF size={19}/></a>
            <a href="#" aria-label="Veya on X" title="X"><FaXTwitter size={19}/></a>
          </div>
        </div>
      </div>
    </section>
  )
}
