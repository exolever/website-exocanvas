import React from 'react'

const HeaderAlternative = () => (
  <header id="header">
    <a href="/" className="title">ExO Canvas</a>
    <nav>
      <ul>
        <li {% if section == 'scalable' %}className="active"{% endif %}>
          <a href="{% url 'landing:how-scalable' %}">How scalable</a>
        </li>
        <li {% if section == 'creation' %}className="active"{% endif %}>
          <a href="{% url 'landing:creation-process' %}">Contribute</a>
        </li>
      </ul>
    </nav>
  </header>
)

export default HeaderAlternative
