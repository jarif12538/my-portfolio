import { useState, useEffect } from 'react'
import './Home.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { FaBriefcase, FaCode, FaLanguage, FaDownload, FaTimes, FaFilePdf } from 'react-icons/fa'
import profileImage from '../assets/jarif2.png'

const stats = [
  { id: 1, icon: <FaBriefcase />, value: "11+", label: "PROJECTS COMPLETED" },
  { id: 2, icon: <FaCode />, value: "20+", label: "SKILLS" },
  { id: 3, icon: <FaLanguage />, value: "6+", label: "PROGRAMMING LANGUAGES" },
]

function Home() {
  const [showResumeModal, setShowResumeModal] = useState(false)
  const resumeUrl = "/Hasan_Jarif_Resume.pdf"

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowResumeModal(false)
      }
    }
    if (showResumeModal) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [showResumeModal])

  return (
    <section id="home" className="home">
      <div className="home-content">
        <span className="kicker">HELLO! • I AM</span>

        <h1>
          Jarif <br />
          <span className="subtitle">Cybersecurity | SOC | Network Security</span>
        </h1>

        <p className="home-desc">
          I focus on protecting digital assets, analyzing threats, and
          monitoring security logs with practical security tools.
        </p>

        <p className="home-tagline">
          Backed by real projects: SIEM deployment, Log analysis, and Threat Intelligence.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn-gradient">View Projects</a>
          <button
            type="button"
            className="btn-outline"
            onClick={() => setShowResumeModal(true)}
          >
            View Resume
          </button>
        </div>

        <div className="social-row">
          <a href="https://github.com/jarif12538" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hasan-jarif-934543345" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <span className="stat-icon">{stat.icon}</span>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="photo-panel">
        <img src={profileImage} alt="Jarif" className="profile-pic" />
      </div>

      {showResumeModal && (
        <div className="resume-modal-overlay" onClick={() => setShowResumeModal(false)}>
          <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <div className="resume-modal-title">
                <FaFilePdf className="pdf-icon" />
                <span>Hasan Jarif — Resume</span>
              </div>
              <div className="resume-modal-actions">
                <a
                  href={resumeUrl}
                  download="Hasan_Jarif_Resume.pdf"
                  className="modal-download-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDownload />
                  <span>Download</span>
                </a>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setShowResumeModal(false)}
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            <div className="resume-modal-body">
              <iframe
                src={`${resumeUrl}#toolbar=1`}
                title="Hasan Jarif Resume"
                className="resume-iframe"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home