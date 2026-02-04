import { useState, useEffect } from 'react'
import '../styles/skills.css'
import { FaReact, FaNodeJs, FaMobileAlt, FaProjectDiagram } from 'react-icons/fa'

export default function Skills() {
  const [skillCategories, setSkillCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // ===============================
  // FETCH SKILLS FROM BACKEND
  // ===============================
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/skills')
        if (!response.ok) throw new Error('Failed to fetch skills')
        const data = await response.json()
        setSkillCategories(data)
        setError(null)
      } catch (err) {
        console.error('Error fetching skills:', err)
        setError('Failed to load skills')
        setSkillCategories([])
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  // ===============================
  // OPTIONAL STATIC DATA FOR FRONTEND DISPLAY
  // ===============================
  const staticSkillCategories = [
    {
      _id: 'web',
      category: 'Front-End Web Development (MERN)',
      icon: <FaReact className="skill-icon react-icon" />,
      skills: [
        { name: 'React', level: 95 },
        { name: 'MongoDB / Express / Node.js', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
    {
      _id: 'mobile',
      category: 'Mobile App Development',
      icon: <FaMobileAlt className="skill-icon mobile-icon" />,
      skills: [
        { name: 'React Native', level: 90 },
        { name: 'Expo', level: 85 },
        { name: 'QR Code Integration', level: 80 },
        { name: 'Push Notifications', level: 80 },
      ],
    },
    {
      _id: 'management',
      category: 'Project Management',
      icon: <FaProjectDiagram className="skill-icon pm-icon" />,
      skills: [
        { name: 'Agile & Scrum', level: 85 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Critical Thinking', level: 90 },
        { name: 'Effective Communication', level: 95 },
      ],
    },
  ]

  // Use backend data if available, otherwise fallback to static
  const skillsToDisplay =
    skillCategories.length > 0 ? skillCategories : staticSkillCategories

  return (
    <section id="skills">
      <div className="container">
        <div className="skills-header">
          <h2>Skills & Expertise</h2>
          <p>
            A curated set of skills I use to build scalable web and mobile applications
            and manage projects efficiently
          </p>
        </div>

        {loading && (
          <div className="loading">
            <p>Loading skills...</p>
          </div>
        )}

        {/* {error && (
          <div className="error">
            <p>{error}</p>
          </div>
        )} */}

        <div className="skills-grid">
          {skillsToDisplay.map((category) => (
            <div key={category._id} className="skill-category">
              <h3>
                {category.icon} {category.category}
              </h3>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    <span className="skill-dot"></span>
                    <span>{skill.name}</span>
                    <div className="skill-bar-container">
                      <div
                        className="skill-bar"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills-highlight">
          <h3>MERN & Mobile App Specialist</h3>
          <p>
            Computer Science Graduate from Ahmadu Bello University. Specialized in
            building scalable web applications with MERN stack, cross-platform mobile apps
            using React Native & Expo, and managing projects efficiently from planning to delivery.
          </p>
        </div>
      </div>
    </section>
  )
}
