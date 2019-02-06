import React from 'react'

import rawPixel706373UnsplashImage from '../images/rawpixel-706373-unsplash.jpg'
import ContributeForm from './forms/ContributeForm'

const CreationProcess = () => (
  <div id="wrapper">
    <section id="main" className="wrapper">
      <div className="inner">
        <h1 className="major">The ExO Canvas Co-Creation Process</h1>
        <div className="row">
          <div className="col-4 col-12-small">
            <span className="image fit">
              <img src={rawPixel706373UnsplashImage} alt="" />
            </span>
          </div>
          <div className="col-8 col-12-small">
            <p>
              The ExO Canvas was created by a group of ExO practitioners from
              around the world during a co-creation process that took a few
              months and was released in March 2016. To continuously improving
              this great tool, the ExO Canvas is being managed as a software
              piece. Every few months, a new version of the ExO Canvas will be
              released based on the feedback received by the ExO Canvas
              Community.
            </p>

            <p
              style={{
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              <a href="/co-creators/">
                Here you can see a full list of the Co-Creators of the ExO
                Canvas
              </a>
            </p>

            <p>
              If you have feedback and want to make a contribution for the
              upcoming versions of the ExO Canvas, please send it here and...
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="wrapper">
      <div className="inner" style={{ paddingTop: 0 }}>
        <h4>You may become an official Co-Creator of the ExO Canvas:</h4>
        <ContributeForm />
      </div>
    </section>
  </div>
)

export default CreationProcess
