import React, {useEffect, useState} from 'react'
import {ArrowRight, Check, LockKeyhole, MessageCircle, ShieldCheck, Sparkles} from 'lucide-react'

const reasons = [
  'Understand what your skin may actually need',
  'Get an honest, personalised starting point',
  'Leave with clear next steps, not a sales pitch',
]

export default function ConsultationLanding(){
  const [status, setStatus] = useState(null)

  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('show')
          observer.unobserve(entry.target)
        }
      })
    },{threshold:0.15})
    document.querySelectorAll('.consultation-reveal').forEach(element=> observer.observe(element))
    return ()=> observer.disconnect()
  },[])

  async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    setStatus('sending')
    try{
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(Object.fromEntries(form.entries())),
      })
      const result = await response.json().catch(() => ({}))
      setStatus(response.ok ? 'sent' : (result.error || 'Unable to send your request.'))
    }catch(error){
      setStatus('The consultation form is temporarily unavailable. Please try again shortly.')
    }
  }

  return (
    <div className="consultation-page">
      <header className="consultation-header">
        <a href="/" className="consultation-brand" aria-label="Veya Aesthetic Clinic home">
          <img src="/veya-logo.svg" alt="" />
          <span>Veya Aesthetic Clinic</span>
        </a>
        <span className="consultation-header-note">Thoughtful care. No pressure.</span>
      </header>

      <main>
        <section className="consultation-hero">
          <div className="consultation-hero-content consultation-reveal show">
            <p className="consultation-kicker"><Sparkles size={16}/> Free skin confidence consultation</p>
            <h1>Not sure what your skin actually needs?</h1>
            <p className="consultation-intro">Get a calm, expert consultation before spending money on treatments.</p>
            <p className="consultation-support">We’ll listen to your concerns, talk through realistic options, and help you make an informed decision. No pressure to book a treatment. No one-size-fits-all plan.</p>
            <a href="#consultation-form" className="consultation-hero-cta">Request a free consultation <ArrowRight size={18}/></a>
            <p className="consultation-microcopy"><LockKeyhole size={14}/> Your details stay private.</p>
          </div>
          <div className="consultation-hero-image consultation-reveal show" aria-hidden="true" />
        </section>

        <section className="consultation-proof">
          <div className="consultation-proof-inner">
            <div className="consultation-reveal" style={{transitionDelay:'80ms'}}><ShieldCheck size={24}/><span>Clinically-led guidance</span></div>
            <div className="consultation-reveal" style={{transitionDelay:'160ms'}}><MessageCircle size={24}/><span>A conversation, not a sales pitch</span></div>
            <div className="consultation-reveal" style={{transitionDelay:'240ms'}}><Check size={24}/><span>Clear next steps</span></div>
          </div>
        </section>

        <section className="consultation-details">
          <div className="consultation-reasons consultation-reveal">
            <p className="consultation-eyebrow">A better first step</p>
            <h2>Start with clarity, not a treatment list.</h2>
            <p>Skin advice can feel overwhelming when every concern seems to have a different solution. Your consultation is a quiet space to ask questions and understand what is worth considering for you.</p>
            <ul>{reasons.map(reason => <li key={reason}><Check size={18}/><span>{reason}</span></li>)}</ul>
          </div>
          <div id="consultation-form" className="consultation-form-card consultation-reveal" style={{transitionDelay:'120ms'}}>
            <p className="consultation-eyebrow">Your free consultation</p>
            <h2>Let’s begin with a conversation.</h2>
            <p className="form-note">Tell us a little about yourself and we’ll be in touch within 48 hours.</p>
            <form onSubmit={handleSubmit} className="consultation-form">
              <label>Name<input name="name" autoComplete="name" required /></label>
              <label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label>
              <label>Email<input name="email" type="email" autoComplete="email" required /></label>
              <label>Preferred consultation date<input name="appointment_date" type="date" min={new Date().toISOString().split('T')[0]} required /></label>
              <label>What would you like help with?<textarea name="message" rows="4" required /></label>
              <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending request...' : 'Request my free consultation'} <ArrowRight size={18}/></button>
              {status === 'sent' && <p className="form-success">Thank you. We’ll be in touch soon.</p>}
              {status && status !== 'sending' && status !== 'sent' && <p className="form-error">{status}</p>}
            </form>
            <p className="form-privacy"><LockKeyhole size={14}/> Your information is private and used only to respond to your enquiry.</p>
          </div>
        </section>
      </main>

      <footer className="consultation-footer">
        <span>Veya Aesthetic Clinic</span>
        <span>Natural-looking care, thoughtfully delivered.</span>
        <a href="/">Visit the main website</a>
      </footer>
    </div>
  )
}
