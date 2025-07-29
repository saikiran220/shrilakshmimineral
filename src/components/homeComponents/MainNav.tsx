import  { useState } from "react"

import { Link } from "react-router-dom"

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-logo">
          <img src="/src/assets/images/logo.png" alt="Shri Lakshmi Minerals" />
        </Link>
        
        <button 
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">PRODUCTS</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">GALLERY</Link>
          </li>
          <li className="nav-item">
            <Link to="/global-export" className="nav-link">GLOBAL EXPORT</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">CONTACT US</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNav