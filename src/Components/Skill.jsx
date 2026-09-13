import './Skill.css'
import useOnScreen from '../Hooks/scroll_effect.js'
import skillCategories from '../data/skill.js'

function Skill() {
  const [ref, isVisible] = useOnScreen()

  return (
    <section
      id="skills"
      className={`skills ${isVisible ? 'is-visible' : ''}`}
      ref={ref}
    >
      <h2>Skills</h2>
      <div className="skills-card-grid">
        {skillCategories.map((category) => (
          <div key={category.id} className="skill-card">
            <div className="skill-card-heading">
              <span className="category-emoji">{category.emoji}</span>
              <h3>{category.title}</h3>
            </div>

            {category.skills.map((skill) => (
              <div key={skill.name} className="skill-row">
                <div className="skill-row-name">
                  <img src={skill.icon} alt={skill.name} className="skill-row-icon" />
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skill