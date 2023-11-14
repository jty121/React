import './showcase.css'
import React from 'react'

import img_wavylines from '../../../assets/images/background-lines.svg'
import img_showcase_picture from '../../../assets/images/showcase-image.svg'
import { Link } from 'react-router-dom'

const showcase = () => {
  return (
    <section className="showcase">
        <img className="wavy-lines-left" src={img_wavylines} alt="" />
        <div className="container">
            <div className="content">
                <h1>
                    We Provide The Best Business
                    Solutions
                </h1>
                <p>
                    Establish your vision and value proposition and turn them into testable prototypes.
                </p>
                <Link to="/Get consulting" className="btn btn-yellow">Get Consulting <i className="fa-light fa-arrow-up-right"></i></Link>
                <Link to="/Learn more" className="btn btn-transparent">Learn More <i className="fa-light fa-arrow-up-right"></i></Link>
            </div>
            <img className="showcase_picture" src={img_showcase_picture} alt="a man in suit, holding a tablet" />
        </div>
    </section>
  )
}

export default showcase