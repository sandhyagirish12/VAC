import React from 'react'

const services = [
  {title: 'Skin Rejuvenation', desc: 'Non-surgical treatments to improve texture and tone.', icon: '✨'},
  {title: 'Injectables', desc: 'Fine-tuned neuromodulators & fillers for natural results.', icon: '💉'},
  {title: 'Laser & Light', desc: 'Targeted devices for pigmentation, veins, and resurfacing.', icon: '🔆'},
  {title: 'Skin Health Plans', desc: 'Personalised plans combining treatment and at-home care.', icon: '📋'},
]

export default function Services({onBookAppointment}){
  return (
    <section id="services" className="section reveal">
      <div className="container">
        <h3>What We Offer</h3>
<p>At Veya, we provide more than treatments — we provide reassurance. From your first consultation to your final follow‑up, our process is designed to be calm, private, and pressure‑free. We offer personalized consultations, subtle enhancements, and ongoing support, ensuring you feel confident at every step. Whether you are considering acne‑scar care, skin rejuvenation, or simply exploring what’s possible, we guide you with honesty and expertise.</p>
        <div className="grid services-grid">
          {services.map(s => (
            <div key={s.title} className="card service reveal-item" style={{transitionDelay:`${services.indexOf(s) * 90}ms`}}>
              <div className="icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <br/>
        <div className="section-cta">
          <button className="btn primary" type="button" onClick={onBookAppointment}>Book an Appointment</button>
        </div>
      </div>
    </section>
  )
}
