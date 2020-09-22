import { Link } from 'gatsby'
import React from 'react'
import '../styles/components/header.scss'

const Header = ({ children, location }) => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/"></Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
