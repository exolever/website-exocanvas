import React from 'react'
import { Location } from '@reach/router'

const HeaderAlternative = () => {
  return (
    <header id="header">
      <a className="title" href="/">
        ExO Canvas
      </a>
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
                  <a href={HOW_SCALABLE_PATH}>How scalable</a>
                </li>
                <li
                  className={`${
                    pathname === CREATION_PROCESS_PATH ? 'active' : ''
                  }`}
                >
                  <a href={CREATION_PROCESS_PATH}>Contribute</a>
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
