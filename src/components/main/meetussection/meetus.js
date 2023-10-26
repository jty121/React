import './meetus.css'
import React from 'react'

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
                        <img src="images/kristinepalmer.jpg" alt="photo of Krisitne Palmer, chef operation officer" />
                        <div className="style-h4">
                            <h4>Kristine Palmer</h4>
                        </div>
                        <p>Chef Operation Officer</p>
                    </div>
                    <div className="info-box">
                        <img src="images/markaubri.jpg" alt="photo of Mark Aubri, senior consultant" />
                        <div className="style-h4">
                            <h4>Mark Aubri</h4>
                        </div>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="info-box">
                        <img src="images/kimberlyhansen.jpg" alt="photo of Kimberly Hansen, senior consultant" />
                        <div className="style-h4">
                            <h4>Kimberly Hansen</h4>
                        </div>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="info-box">
                        <img src="images/justinwilloman.jpg" alt="photot of Justin Willoman, senior tech consultant" />
                            <div className="style-h4">
                        <h4>Justin Willoman</h4>
                        </div>
                        <p>Senior Tech Consultant</p>
                    </div>
                </div>
            </div>
            <div className="dots">
                <img src="images/dot.png" alt="dots" />
            </div>
        </div>
    </section>
  )
}

export default meetus