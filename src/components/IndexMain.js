import React from 'react'

import ContactForm from './forms/ContactForm'
import SubscriptionForm from './forms/SubscriptionForm'
import downloadCanvasHomeImage from '../images/download_canvas_home.png'
import howScalableHomeImage from '../images/how_scalable_home.png'
import rawPixel706373Unsplash from '../images/rawpixel-706373-unsplash.jpg'

const IndexMain = () => (
  <div id="wrapper">
    <section id="intro" className="wrapper style1 fullscreen fade-up inactive">
      <div className="inner">
        <div className="row">
          <div className="col-6 content">
            <h1>ExO Canvas</h1>
            <div>
              <div>
                <p>Your Exponential Organization on one page</p>
                <p>
                  The ExO Canvas helps visionaries, innovators, top executives
                  and entrepreneurs design highly scalable organizations by
                  leveraging new organizational techniques and accelerating
                  technologies, creating an Exponential Organization
                </p>
              </div>
            </div>

            <ul className="actions">
              <li>
                <a href="#one" className="button scrolly">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="one" className="wrapper style2 spotlights">
      <section id="subscribe_form_section" className="inactive">
        <a href="#one" className="image">
          <img
            src={downloadCanvasHomeImage}
            alt=""
            data-position="center center"
          />
        </a>
        <div className="content">
          <div className="inner">
            <h2>Download the ExO Canvas</h2>
            <p>
              The ExO Canvas helps visionaries, innovators, top executives and
              entrepreneurs design highly scalable organizations by leveraging
              new organizational techniques and accelerating technologies,
              creating an Exponential Organization (ExO).
            </p>
            <SubscriptionForm />
          </div>
        </div>
      </section>
      <section className="inactive">
        <a href="/how-scalable/" className="image">
          <img
            src={howScalableHomeImage}
            alt="How Scalable Home"
            data-position="top center"
          />
        </a>
        <div className="content">
          <div className="inner">
            <h2>How scalable is your organization? Is it an ExO?</h2>
            <p>
              The ExO Canvas is a guide to assist organizations onto a new path
              to embraces technology and leverages new ways to scale, think,
              plan and operate.
            </p>
            <ul className="actions">
              <li>
                <a className="button" href="/how-scalable/">
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="inactive">
        <a href="/creation-process/" className="image">
          <img
            src={rawPixel706373Unsplash}
            alt="Creation Process"
            data-position="25% 25%"
          />
        </a>
        <div className="content">
          <div className="inner">
            <h2>The ExO Canvas Co-Creation Process</h2>
            <p>
              The ExO Canvas was created by a group of ExO practitioners from
              around the world during a co-creation process that took a few
              months and was released in March 2016. To continuously improving
              this great tool, the ExO Canvas is being managed as a software
              piece. Every few months, a new version of the ExO Canvas will be
              released based on the feedback received by the ExO Canvas
              Community.
            </p>
            <ul className="actions">
              <li>
                <a className="button" href="/co-creators/">
                  Meet the Co-Creators
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style1 fade-up inactive">
      <div className="inner">
        <h2>Get in Touch</h2>
        <div className="split style1">
          <section id="contact_form_section">
            <ContactForm />
          </section>
        </div>
      </div>
    </section>
  </div>
)

export default IndexMain
