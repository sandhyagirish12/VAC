import React, {useEffect, useState, useRef} from 'react'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&h=900&q=85',
    title: 'Refreshed. Natural. Confident.',
    subtitle: 'Clinically-led treatments with a personal touch',
    copy: 'Subtle improvements that keep you looking like yourself — only fresher. Our clinicians prioritise safety and real outcomes over hype.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=85',
    title: 'Confidence, not change.',
    subtitle: 'Thoughtful injectables & skin health',
    copy: 'We focus on balanced results and long-term skin health plans—tailored to your goals and lifestyle.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1600&h=900&q=85',
    title: 'Real people, real care.',
    subtitle: 'Inclusive treatments for all genders',
    copy: 'Our approach treats each person as an individual. We welcome men and women seeking natural, understated results.'
  }
]

export default function Hero({onBookAppointment}){
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(()=>{
    resetTimeout()
    timeoutRef.current = setTimeout(()=>{
      setIndex((prev)=> (prev + 1) % slides.length)
    }, 6000)
    return resetTimeout
  },[index])

  function resetTimeout(){
    if(timeoutRef.current){
      clearTimeout(timeoutRef.current)
    }
  }

  return (
    <section id="home" className="hero slider reveal">
      <div className="slider-window">
        {slides.map((s, i) => (
          <div key={s.id} className={`slide slide-${s.id} ${i === index ? 'active' : ''}`} style={{backgroundImage:`url(${s.image})`}}> 
            <div className="container hero-inner">
              <h2 className="eyebrow">{s.subtitle}</h2>
              <h1 className="hero-title">{s.title}</h1>
              <p className="hero-sub">{s.copy}</p>
              <div className="hero-actions">
                <button type="button" className="btn primary" onClick={onBookAppointment}>Book an Appointment</button>
                <a href="#services" className="btn ghost">View Services</a>
              </div>
            </div>
          </div>
        ))}
        <button className="nav prev" onClick={()=> setIndex((index -1 + slides.length)%slides.length)} aria-label="Previous slide">‹</button>
        <button className="nav next" onClick={()=> setIndex((index +1)%slides.length)} aria-label="Next slide">›</button>
        <div className="dots">
          {slides.map((_,i)=> (
            <button key={i} className={`dot ${i===index? 'on':''}`} onClick={()=> setIndex(i)} aria-label={`Go to slide ${i+1}`}></button>
          ))}
        </div>
      </div>
    </section>
  )
}
