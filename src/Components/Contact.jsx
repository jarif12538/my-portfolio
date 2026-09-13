import { useState } from 'react'
import './Contact.css'
import useOnScreen from '../Hooks/scroll_effect.js'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaFacebook } from 'react-icons/fa'
import { SiHackthebox, SiTryhackme } from 'react-icons/si'

function Contact() {
  const [ref, isVisible] = useOnScreen()
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xyzabcde', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className={`contact ${isVisible ? 'is-visible' : ''}`}
      ref={ref}
    >
      <h2>Get In Touch</h2>
      <p>Lets secure the digital world together.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="btn" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && <p className="form-status success">Message sent! I'll get back to you soon.</p>}
        {status === 'error' && <p className="form-status error">Something went wrong. Try again or email me directly.</p>}
      </form>

      <div className="social-icons">
        <a
          href="mailto:hasanjarif12538@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        <a
          href="Whatsapp://send?phone=01537291547"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.facebook.com/hasan.jarif.14"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>

        <a
          href="https://github.com/jarif12538"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/hasan-jarif-934543345"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>


      </div>
    </section>
  )
}

export default Contact