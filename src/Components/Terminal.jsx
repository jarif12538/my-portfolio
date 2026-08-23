import { useState, useEffect } from 'react'
import './Terminal.css'

const lines = [
  "whoami",
  "Jarif —SOC|Netwwork Security, MERN-Stack Dev.",
  "skills --list",
  "React, Threat Analysis, Log Analysis, Wazuh, SIEM."
]

function Terminal() {
  const [displayedText, setDisplayedText] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (lineIndex >= lines.length) return

    if (charIndex < lines[lineIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + lines[lineIndex][charIndex])
        setCharIndex(charIndex + 1)
      }, 40)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + '\n')
        setLineIndex(lineIndex + 1)
        setCharIndex(0)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, lineIndex])

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <pre className="terminal-body">
        {displayedText }
        <span className="cursor">▌</span>
      </pre>
    </div>
  )
}

export default Terminal