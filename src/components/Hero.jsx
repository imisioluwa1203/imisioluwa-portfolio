import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-profile fade-up">
        <img className="avatar" src="/photo.jpg" alt="portrait of Imisioluwa" />
        <div>
          <p className="name">Imisioluwa</p>
          <p className="status">
            <span className="status-dot"></span> Open to work
          </p>
        </div>
      </div>

      <h1 className="fade-up delay-1">
        I build web apps that people{' '}
        <span className="accent">actually use.</span>
      </h1>

      <p className="intro fade-up delay-2">
        Software engineering student. Real projects, live demos, clean code.
      </p>

      <div className="hero-buttons fade-up delay-3">
        <a className="button primary" href="#work">See my work</a>
        <a className="button secondary" href="#contact">Get in touch</a>
      </div>
    </section>
  )
}