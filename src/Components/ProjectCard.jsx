import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({ id, title, description, tech }) {
  return (
    <div className="project-card">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="tech-list">
        {tech.map((item) => (
          <span key={item} className="tech-item">
            {item}
          </span>
        ))}
      </div>
      <Link to={`/project/${id}`} className="project-link">
        View Project
      </Link>
    </div>
  )
}

export default ProjectCard