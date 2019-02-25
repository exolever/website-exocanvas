import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="icon"
          href="/images/cropped-favicon-32x32.png"
          sizes="32x32"
        />
        <meta
          name="msapplication-TileImage"
          content="/images/cropped-favicon.png"
        />
        <link rel="stylesheet" href="/css/custom.css" preload="true" />
        <link
          rel="stylesheet"
          href="/css/font-awesome.min.css"
          preload="true"
        />
        <link rel="stylesheet" href="/css/main.css" preload="true" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="is-preload">
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
          <link rel="stylesheet" href="/css/noscript.css" preload="true" />
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <script
          type="application/javascript"
          src={withPrefix('/js/jquery.min.js')}
        />
        <script
          type="application/javascript"
          src={withPrefix('/js/jquery.scrollex.min.js')}
        />
        <script
          type="application/javascript"
          src={withPrefix('/js/jquery.scrolly.min.js')}
        />
        <script
          type="application/javascript"
          src={withPrefix('/js/browser.min.js')}
        />
        <script
          type="application/javascript"
          src={withPrefix('/js/breakpoints.min.js')}
        />
        <script type="application/javascript" src={withPrefix('/js/util.js')} />
        <script type="application/javascript" src={withPrefix('/js/main.js')} />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
