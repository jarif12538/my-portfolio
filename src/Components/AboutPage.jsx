import './AboutPage.css'
import useOnScreen from '../Hooks/scroll_effect.js'

function AboutPage() {
  const [ref, isVisible] = useOnScreen()

  return (
    <section
      id="about"
      className={`about-page ${isVisible ? 'is-visible' : ''}`}
      ref={ref}
    >
      <h2 className="about-heading">My Beginning</h2>

      <div className="about-layout">
        <div className="about-content">
          <p>
            My journey into cybersecurity started with a simple curiosity
            about how computers and networks work — and, more importantly,
            how they can be attacked. During university, I began exploring
            networking and Linux, using tools like Cisco Packet Tracer and
            Kali Linux to understand how systems communicate and how network
            security works.
          </p>

          <p>
            The more I learned, the more I became interested in what happens
            when something goes wrong: how attacks are detected, how
            suspicious activity is investigated, and how systems are
            defended. That curiosity led me toward SOC and Blue Team
            security — working with Wazuh, EDR solutions, firewalls, and other
            security tools while building hands-on labs and practicing detection
            scenarios on platforms like TryHackMe and Hack The Box.
          </p>

          <p>
            Today, I'm focused on developing my skills in SOC operations,
            threat detection, log analysis, and network security, with the
            goal of becoming a strong cybersecurity professional.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <h3>4+</h3>
              <span>4 month EXP.</span>
            </div>
            <div className="about-stat">
              <h3>11+</h3>
              <span>PROJECTS</span>
            </div>
          </div>
        </div>

        <div className="about-icons">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            alt="Linux"
            className="floating-icon icon-1"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            className="floating-icon icon-2"
          />
          <img
            src="/icons/wazuh.svg"
            alt="Wazuh"
            className="floating-icon icon-3"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutPage
