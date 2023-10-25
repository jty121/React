import './showcase.css'
import React from 'react'

import img_wavylines from '../../../assets/images/background-lines.svg'
import img_showcase_picture from '../../../assets/images/showcase-image.svg'

const showcase = () => {
  return (
    <section className="showcase">
        <img className="wavy-lines-left" src={img_wavylines} alt="white lines to the left" />
        <div className="container">
            <div className="content">
                <h1>
                    We Provide The Best Business
                    Solutions
                </h1>
                <p>
                    Establish your vision and value proposition and turn them into testable prototypes.
                </p>
                <a className="btn btn-yellow">Get Consulting <i className="fa-light fa-arrow-up-right"></i></a>
                <a className="btn btn-transparent">Learn More <i className="fa-light fa-arrow-up-right"></i></a>
            </div>
            <img className="showcase_picture" src={img_showcase_picture} alt=" Picture of a man in suit, holding a tablet" />
        </div>
    </section>
  )
}

export default showcase