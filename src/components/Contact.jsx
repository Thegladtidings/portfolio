import { useState } from 'react'
import '../styles/contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // ===============================
    // FRONTEND-ONLY EMAIL HANDLING
    // ===============================
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    )

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    )

    window.location.href = `mailto:thegladtidings15@gmail.com?subject=${subject}&body=${body}`

    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)

    /*
    ===============================
    BACKEND LOGIC (COMMENTED OUT)
    ===============================

    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please try again.')
    }
    */
  }

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Let's Work Together</h2>
          <p>
            Have a project in mind? I'd love to hear about it. Get in touch and
            let's create something amazing.
          </p>
        </div>

        <div className="contact-content">
          <div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Message
              </button>

              {submitted && (
                <div className="success-message">
                  Thanks for reaching out! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          <div className="contact-info">
            <div>
              <h3>Contact Info</h3>
              <ul className="contact-list">
                <li className="contact-item">
                  <p>Email</p>
                  <a href="mailto:thegladtidings15@gmail.com">
                    thegladtidings15@gmail.com
                  </a>
                </li>
                <li className="contact-item">
                  <p>Phone</p>
                  <a href="tel:+2349032618938">+234 903 261 8938</a>
                </li>
                <li className="contact-item">
                  <p>Location</p>
                  <p>Nigeria</p>
                </li>
              </ul>
            </div>

            <div>
              <h3>Follow Me</h3>
              <ul className="contact-list">
                <li className="contact-item">
                  <a href="https://github.com/Thegladtidings/" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li className="contact-item">
                  <a href="https://linkedin.com/in/musa-bashir-695374246" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li className="contact-item">
                  <a href="https://twitter.com/albasheer15" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
