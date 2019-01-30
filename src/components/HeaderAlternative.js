import React from 'react'
import { Link } from 'gatsby'

const HeaderAlternative = () => (
  <header id="header">
    <Link className="title" to="/">
      ExO Canvas
    </Link>
    <nav>
      {/* <ul>
        <li {% if section == 'scalable' %}className="active"{% endif %}>
          <a href="{% url 'landing:how-scalable' %}">How scalable</a>
        </li>
        <li {% if section == 'creation' %}className="active"{% endif %}>
          <a href="{% url 'landing:creation-process' %}">Contribute</a>
        </li>
      </ul> */}

      {/* TODO: Make active link take className active, as above */}
      <ul>
        <li>
          <Link to="/how-scalable/">How scalable</Link>
        </li>
        <li>
          <Link to="/creation-process/">Contribute</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default HeaderAlternative
