import React from 'react'

import logoOpenExoImage from '../images/logo_openexo.svg'

const Footer = () => (
  <footer id="footer" className="wrapper style1-alt">
    <div className="inner">
      <ul className="menu">
        <li>
          &copy; The ExO Canvas {new Date().getFullYear()}. All rights reserved.
        </li>
        <a href="https://www.openexo.com">
          <img src={logoOpenExoImage} alt="logo" width="100" />
        </a>
      </ul>
    </div>
  </footer>
)

export default Footer
