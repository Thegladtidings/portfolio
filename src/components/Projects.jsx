import '../styles/projects.css'
import { useState } from 'react'

export default function Projects() {
  const staticProjects = [
    {
      _id: 'vtu-app',
      title: 'VTU Mobile App',
      description:
        'A mobile application developed with Expo (React Native) that allows users to purchase data and airtime in real time, as well as share and redeem gift cards. The app emphasizes usability, reliability, and smooth transaction handling across multiple digital services.',
      tags: ['Expo', 'React Native', 'VTU', 'Airtime & Data', 'Mobile App', 'Gift Cards'],
      image: '/images/vtu-app.png',
      github: 'https://github.com/Thegladtidings/Vtu-app', // 🔹 add this
    },
    {
      _id: 'qr-attendance',
      title: 'QR Code Attendance System',
      description:
        'A QR code–based attendance management system designed to streamline student attendance during examinations. Students scan a unique QR code to confirm their presence, reducing manual errors, preventing impersonation, and improving efficiency for exam supervisors.',
      tags: ['React', 'QR Code', 'Attendance', 'Education'],
      image: '/images/qr-attendance.png',
      github: 'https://github.com/Thegladtidings/qr-code', // 🔹 add this
    },
  ]

  const [projects] = useState(staticProjects)

  return (
    <section id="projects">
      <div className="container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p>
            A selection of projects showcasing my expertise in mobile and web
            development
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project._id} className="project-card">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* 🔹 GitHub Button */}
              {project.github && (
                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
