import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

const HeaderAlternative = () => {
  return (
    <header id="header">
      <Link className="title" to="/">
        ExO Canvas
      </Link>
      <nav>
        <Location>
          {locationProps => {
            const { pathname } = locationProps.location
            const HOW_SCALABLE_PATH = '/how-scalable/'
            const CREATION_PROCESS_PATH = '/creation-process/'

            return (
              <ul>
                <li
                  className={`${
                    pathname === HOW_SCALABLE_PATH ? 'active' : ''
                  }`}
                >
                  <Link to={HOW_SCALABLE_PATH}>How scalable</Link>
                </li>
                <li
                  className={`${
                    pathname === CREATION_PROCESS_PATH ? 'active' : ''
                  }`}
                >
                  <Link to={CREATION_PROCESS_PATH}>Contribute</Link>
                </li>
              </ul>
            )
          }}
        </Location>
      </nav>
    </header>
  )
}

export default HeaderAlternative
