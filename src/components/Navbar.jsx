import { useState } from 'react'
import './Navbar.css'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <a className="logo" href="#top">
        imisioluwa<span>.</span>dev
      </a>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'Close' : 'Menu'}
      </button>

      <nav className={menuOpen ? 'links open' : 'links'}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a className="hire" href="#contact" onClick={() => setMenuOpen(false)}>
          Hire me
        </a>
      </nav>
    </header>
  )
}