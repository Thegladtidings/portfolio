import '../styles/Hero.css'
export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="mb-8">
          <div className="hero-badge">
            MERN Stack Specialist
          </div>
          <h1 className="hero-title">
            Bashir Musa Olanrewaju
          </h1>
          <p className="hero-subtitle">
            Mobile App & Web Developer
          </p>
          <p className="hero-description">
            Building scalable applications with React Native, Expo, Node.js, and MongoDB. Computer Science Graduate from Ahmadu Bello University.
          </p>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>

        <div className="hero-stats">
          <p className="stats-label">Specialized in</p>
          <div className="stats-grid">
            <div className="stat-item">
              <p className="stat-number">2+</p>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">4+</p>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">2</p>
              <p className="stat-label">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
