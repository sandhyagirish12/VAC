import React, {useEffect, useState, useRef} from 'react'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
    title: 'Refreshed. Natural. Confident.',
    subtitle: 'Clinically-led treatments with a personal touch',
    copy: 'Subtle improvements that keep you looking like yourself — only fresher. Our clinicians prioritise safety and real outcomes over hype.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1556228720-4cfe8f6a1d8d?auto=format&fit=crop&w=1600&q=80',
    title: 'Confidence, not change.',
    subtitle: 'Thoughtful injectables & skin health',
    copy: 'We focus on balanced results and long-term skin health plans—tailored to your goals and lifestyle.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1600&q=80',
    title: 'Real people, real care.',
    subtitle: 'Inclusive treatments for all genders',
    copy: 'Our approach treats each person as an individual. We welcome men and women seeking natural, understated results.'
  }
]

export default function Hero(){
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
    <section id="home" className="hero slider">
      <div className="slider-window">
        {slides.map((s, i) => (
          <div key={s.id} className={`slide ${i === index ? 'active' : ''}`}> 
            <img src={`${s.image}`} alt={s.title} className="hero-image"/>
            <div className="container hero-inner">
              <h2 className="eyebrow">{s.subtitle}</h2>
              <h1 className="hero-title">{s.title}</h1>
              <p className="hero-sub">{s.copy}</p>
              <div className="hero-actions">
                <a href="#contact" className="btn primary">Book an Appointment</a>
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
