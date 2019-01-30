import React from 'react'

import HowScalableSectionImage from '../images/how_scalable_section.png'

const HowScalable = () => (
  <div id="wrapper">
    <section id="main" className="wrapper">
      <div className="inner">
        <h1 className="major">
          How scalable is your organization? Is it an ExO?
        </h1>
        <div className="row">
          <div className="col-4 col-12-small">
            <span className="image fit">
              <img
                src={HowScalableSectionImage}
                alt="image"
                style="width:auto;margin:0 auto;"
              />
            </span>
          </div>
          <div className="col-8 col-12-small">
            <p>
              A new breed of organizations called Exponential Organizations are
              leveraging openness, transparency and abundance in a new way. This
              is a new organizational model conducive to operating in an age of
              exponential technological change. Becoming an Exponential
              Organization means closing the gap between a traditional linear
              organization and its exponential environment. An ExO is at least
              10x more effective, efficient and/or faster relative to its linear
              peers in the same market
            </p>
            <p>
              The rapid advancement of technology is disrupting businesses at an
              increasing rate. Utilizing the ExO Canvas, visionaries,
              innovators, top executives and entrepreneurs now have the ability
              to design highly scalable organizations by leveraging new
              organizational techniques and accelerating technologies to create
              an Exponential Organization (ExO). The ExO Canvas is a guide to
              assist organizations onto a new path to embraces technology and
              leverages new ways to scale, think, plan and operate
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default HowScalable
