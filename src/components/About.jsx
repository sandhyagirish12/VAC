import React from 'react'

export default function About(){
  return (
    <section id="about" className="section">
      <div className="container two-col">
        <div>
          <h3>Our Story</h3>
          <p>Veya began with a simple idea: modern, clinically-led treatments delivered with warmth and honesty. We combine medical expertise with a light touch to help you look like yourself — only fresher.</p>

          <h4>Mission</h4>
          <p>Deliver safe, effective aesthetic care without pressure or overpromising.</p>

          <h4>Values</h4>
          <ul>
            <li>Integrity — honest guidance, no gimmicks.</li>
            <li>Safety — evidence-led treatments.</li>
            <li>Subtlety — natural-looking results.</li>
          </ul>
        </div>
        <div className="card offwhite">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60" alt="clinic" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:8}} />
        </div>
      </div>
    </section>
  )
}
