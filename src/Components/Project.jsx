import './Project.css'
import ProjectCard from './ProjectCard.jsx'
import projects from '../data/Project.js'
import useOnScreen from '../Hooks/scroll_effect.js'

function Projects() {
  const [ref, isVisible] = useOnScreen()

  return (
    <section
      id="projects"
      className={`projects ${isVisible ? 'is-visible' : ''}`}
      ref={ref}
    >
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects