import React from 'react'
import { Link } from 'gatsby'

import downloadCanvasHomeImage from '../images/download_canvas_home.png'
import howScalableHomeImage from '../images/how_scalable_home.png'
import rawPixel706373Unsplash from '../images/rawpixel-706373-unsplash.jpg'

const IndexMain = () => (
  <div id="wrapper">
    <section id="intro" className="wrapper style1 fullscreen fade-up">
      <div className="inner">
        <div className="row">
          <div className="col-6 content">
            <h1>ExO Canvas</h1>
            <p>Your Exponential Organization on one page</p>
            <p>
              The ExO Canvas helps visionaries, innovators, top executives and
              entrepreneurs design highly scalable organizations by leveraging
              new organizational techniques and accelerating technologies,
              creating an Exponential Organization
            </p>
            <ul className="actions">
              <li>
                <Link to="/#one" className="button scrolly">
                  Learn more
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="one" className="wrapper style2 spotlights">
      <section id="subscribe_form_section">
        <Link to="/#one" className="image">
          <img
            src={downloadCanvasHomeImage}
            alt=""
            data-position="center center"
          />
        </Link>
        <div className="content">
          <div className="inner">
            <h2>Download the ExO Canvas</h2>
            <p>
              The ExO Canvas helps visionaries, innovators, top executives and
              entrepreneurs design highly scalable organizations by leveraging
              new organizational techniques and accelerating technologies,
              creating an Exponential Organization (ExO).
            </p>
            <form
              className="custom_form"
              method="post"
              action="{% url 'landing:subscribe' %}"
              data-message="Thanks for joining us! Now you are subscribed to the ExO Canvas community!"
              data-download="/pdf/exocanvas.pdf"
            >
              <div className="fields">
                <div className="field half">
                  {/* {{ form_subscription }} */}
                </div>
              </div>
              <ul className="actions">
                <li>
                  <a id="subscribe_submit_button" className="button submit">
                    Download
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </section>
      <section>
        <Link className="image" to="/how-scalable/">
          <img
            src={howScalableHomeImage}
            alt="How Scalable Home"
            data-position="top center"
          />
        </Link>
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
                <Link className="button" to="/how-scalable/">
                  Learn more
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <Link to="/creation-process/" className="image">
          <img
            src={rawPixel706373Unsplash}
            alt="Creation Process"
            data-position="25% 25%"
          />
        </Link>
        <div className="content">
          <div className="inner">
            <h2>The ExO Canvas Co-Creation Process</h2>
            <p>
              The ExO Canvas was created by a group of ExO practitioners from
              around the world during a co-creation process that took a few
              months and was released in March 2016.
            </p>
            <ul className="actions">
              <li>
                <Link className="button" to="/creation-process/">
                  contribute
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style1 fade-up">
      <div className="inner">
        <h2>Get in Touch</h2>
        <div className="split style1">
          <section id="contact_form_section">
            <form
              method="post"
              action="{% url 'landing:contact' %}"
              className="custom_form"
              data-message="Thank you for your message. We’ll be in touch soon!"
            >
              <div className="fields">
                <div className="field">{/* {{form_contact}} */}</div>
              </div>
              <a id="contact_submit_button" className="button submit">
                Send
              </a>
            </form>
          </section>
        </div>
      </div>
    </section>
  </div>
)

export default IndexMain
