import React from 'react'

const services = [
  {title: 'Skin Rejuvenation', desc: 'Non-surgical treatments to improve texture and tone.', icon: '✨'},
  {title: 'Injectables', desc: 'Fine-tuned neuromodulators & fillers for natural results.', icon: '💉'},
  {title: 'Laser & Light', desc: 'Targeted devices for pigmentation, veins, and resurfacing.', icon: '🔆'},
  {title: 'Skin Health Plans', desc: 'Personalised plans combining treatment and at-home care.', icon: '📋'},
]

export default function Services(){
  return (
    <section id="services" className="section">
      <div className="container">
        <h3>Services</h3>
        <p className="lead">A clear breakdown of what we offer — clinical, evidence-led, and tailored to you.</p>
        <div className="grid services-grid">
          {services.map(s => (
            <div key={s.title} className="card service">
              <div className="icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <a className="btn primary" href="#contact">Book an Appointment</a>
        </div>
      </div>
    </section>
  )
}
