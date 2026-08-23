import React, {useState} from 'react'

export default function AppointmentForm({onClose}){
  const [status, setStatus] = useState(null)
  const today = new Date().toISOString().split('T')[0]
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const form = new FormData(e.target)
    const details = Object.fromEntries(form.entries())
    setStatus('sending')
    try{
      const res = await fetch('/api/contact', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(details)
      })
      const result = await res.json().catch(()=> ({}))
      if(res.ok) setStatus('sent')
      else setStatus(result.error || 'Unable to send your request.')
    }catch(err){
      setStatus('The booking service is unavailable. Run this through Vercel to enable email delivery.')
    }
  }

  return (
    <div className="appointment">
      <h3>Book an Appointment</h3>
      <p className="muted">Short consultation to discuss your goals — no pressure.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name<input name="name" required/></label>
        <label>Email<input name="email" type="email" required/></label>
        <label>Phone<input name="phone" type="tel" required/></label>
        <label>Appointment date<input name="appointment_date" type="date" min={today} required/></label>
        <label>Message<textarea name="message" rows={4} required/></label>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <button className="btn primary" type="submit">Request Booking</button>
          <button type="button" className="btn ghost" onClick={onClose}>Cancel</button>
        </div>
        {status === 'sending' && <p>Sending...</p>}
        {status === 'sent' && <p>Thanks — we will reach out soon.</p>}
        {status && status !== 'sending' && status !== 'sent' && <p>{status}</p>}
      </form>
    </div>
  )
}
