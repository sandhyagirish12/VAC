import React from 'react'

const items = [
  {name: 'Samantha, 34', quote: 'Subtle, natural results — I felt listened to.'},
  {name: 'Mark, 48', quote: 'Professional team and calm environment.'},
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="section offwhite reveal">
      <div className="container">
        <h3>Testimonials</h3>
        <div className="grid testimonial-grid">
          {items.map(it => (
            <div key={it.name} className="card reveal-item" style={{transitionDelay:`${items.indexOf(it) * 110}ms`}}>
              <p className="quote">“{it.quote}”</p>
              <p className="muted">— {it.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
