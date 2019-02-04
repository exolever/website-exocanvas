import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <section id="sidebar">
    <div className="inner">
      <nav>
        <ul>
          <li>
            <Link to="/#intro">Welcome</Link>
          </li>
          <li>
            <Link to="/#one">What is ExO Canvas?</Link>
          </li>
          <li>
            <Link to="/#three">Get in touch</Link>
          </li>
        </ul>
      </nav>
    </div>
  </section>
)

export default Header
