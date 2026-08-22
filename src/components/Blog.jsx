import React from 'react'

const posts = [
  {title: '5 Ways to Keep Skin Glowing', excerpt: 'Practical tips from our clinicians.'},
  {title: 'What to Expect from Injectables', excerpt: 'A clear, reassuring guide.'},
]

export default function Blog(){
  return (
    <section id="blog" className="section">
      <div className="container">
        <h3>Blog</h3>
        <div className="grid blog-grid">
          {posts.map(p => (
            <article key={p.title} className="card">
              <h4>{p.title}</h4>
              <p>{p.excerpt}</p>
              <a href="#" className="link">Read</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
