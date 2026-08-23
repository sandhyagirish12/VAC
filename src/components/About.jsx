import React from 'react'

export default function About(){
  return (
    <section id="about" className="section reveal">
      <div className="container two-col">
        <div>
          <h3>Our Story</h3>
          <p>Veya began with a simple idea: modern, clinically‑led treatments delivered with warmth and honesty. We believe that aesthetic care should never feel intimidating or transactional. Instead, it should be a thoughtful partnership where you feel heard, respected, and supported. Our team combines medical expertise with a light touch, helping you look like yourself — only fresher, more confident, and more at ease in your own skin.</p>

          <h4>Mission</h4>
          <p>Our mission is to deliver safe, effective aesthetic care without pressure or overpromising. We want every person who walks through our doors to feel comfortable exploring their options, knowing they will receive clear guidance and evidence‑based treatments tailored to their needs.</p>

          <h4>Values</h4>
          <ul>
            <li>Integrity — honest guidance, no gimmicks.</li>
            <li>Safety — evidence-led treatments.</li>
            <li>Subtlety — natural-looking results.</li>
            <li>Care — Every client is treated with empathy and respect.</li>
            <li>Transparency — Clear communication about procedures, risks, and outcomes.</li>
            <li>Trust — Building long‑term relationships, not one‑time transactions.</li>
          </ul>
          <h4>Why Choose Veya</h4>
          <p>Choosing an aesthetic clinic is a personal decision. At Veya, you’ll find a doctor‑led team committed to safety, subtlety, and integrity. We don’t believe in quick fixes or exaggerated promises. Instead, we focus on natural results that help you feel refreshed and confident, while staying true to yourself.</p>
        </div>
        <div className="card offwhite">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60" alt="clinic" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:8}} />
        </div>
      </div>
    </section>
  )
}
