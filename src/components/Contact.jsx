import React, {useState} from 'react'

export default function Contact(){
  const [status, setStatus] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    setStatus('sending')
    try{
      const res = await fetch('/api/contact', {method: 'POST', body: form})
      if(res.ok) setStatus('sent')
      else setStatus('error')
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container two-col">
        <div>
          <h3>Contact</h3>
          <p>Book a consultation or ask a question. We respond to messages within 48 hours.</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>Name<input name="name" required/></label>
            <label>Email<input name="email" type="email" required/></label>
            <label>Message<textarea name="message" rows="4" required/></label>
            <button className="btn primary" type="submit">Send Message</button>
            {status === 'sending' && <p>Sending…</p>}
            {status === 'sent' && <p>Thanks — we will be in touch.</p>}
            {status === 'error' && <p>There was an error. Please try again.</p>}
          </form>
        </div>
        <div className="card offwhite">
          <h4>Our Location</h4>
          <div className="map-placeholder">Map placeholder</div>
          <div className="socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </section>
  )
}
