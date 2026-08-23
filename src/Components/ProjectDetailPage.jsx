import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'
import projects from '../data/Project.js'
import './ProjectDetailPage.css'

function ProjectDetailPage() {
  const { id } = useParams()
  const projectId = parseInt(id, 10)
  const project = projects.find((p) => p.id === projectId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="project-detail-container not-found">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Back to Projects
        </Link>
        <h2>Project Not Found</h2>
        <p>The project you are looking for does not exist.</p>
      </div>
    )
  }

  return (
    <div className="project-detail-container">
      <Link to="/" className="back-link">
        <FaArrowLeft /> Back to Projects
      </Link>

      <article className="project-detail-content">
        <span className="project-detail-kicker">Featured Project</span>
        <h1>{project.title}</h1>
        <p className="project-detail-description">{project.description}</p>

        <div className="tech-list">
          {project.tech.map((item) => (
            <span key={item} className="tech-item">
              {item}
            </span>
          ))}
        </div>

        <section className="project-detail-section">
          <h2>What I Built & Highlights</h2>
          <ul>
            {project.fullDescription.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="source-link"
          >
            View Source Code <FaExternalLinkAlt style={{ marginLeft: '0.4rem', fontSize: '0.85em' }} />
          </a>
        )}
      </article>
    </div>
  )
}

export default ProjectDetailPage
