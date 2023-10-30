import './meetus.css'
import React from 'react'

import img_palmer from '../../../assets/images/kristinepalmer.jpg'
import img_aubri from '../../../assets/images/markaubri.jpg'
import img_hansen from '../../../assets/images/kimberlyhansen.jpg'
import img_willoman from '../../../assets/images/justinwilloman.jpg'
import img_dots from '../../../assets/images/dot.png'

const meetus = () => {
  return (
    <section className="meet-us">
        <div className="container">
            <div className="content">
                <div className="browse-team">
                    <div className="style-h2">
                        <p>Meet Our Team</p>
                        <h2>Experience Team Members</h2>
                    </div>
                    <div className="btn-browse">
                        <a className="btn btn-yellow">Browse Team <i className="fa-light fa-arrow-up-right"></i></a>
                    </div>
                </div>
                <div className="members">
                    <div className="info-box">
                        <img src={img_palmer} alt="photo of Krisitne Palmer, chef operation officer" />
                        <div className="style-h4">
                            <h4>Kristine Palmer</h4>
                        </div>
                        <p>Chef Operation Officer</p>
                    </div>
                    <div className="info-box">
                        <img src={img_aubri} alt="photo of Mark Aubri, senior consultant" />
                        <div className="style-h4">
                            <h4>Mark Aubri</h4>
                        </div>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="info-box">
                        <img src={img_hansen} alt="photo of Kimberly Hansen, senior consultant" />
                        <div className="style-h4">
                            <h4>Kimberly Hansen</h4>
                        </div>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="info-box">
                        <img src={img_willoman} alt="photot of Justin Willoman, senior tech consultant" />
                            <div className="style-h4">
                        <h4>Justin Willoman</h4>
                        </div>
                        <p>Senior Tech Consultant</p>
                    </div>
                </div>
            </div>
            <div className="dots">
                <img src={img_dots} alt="dots" />
            </div>
        </div>
    </section>
  )
}

export default meetus