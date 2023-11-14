import './meetus.css'
import MeetusBox from './meetusbox'
import React from 'react'
import { Link } from 'react-router-dom'



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
                        <Link to="/Browse team" className="btn btn-yellow">Browse Team <i className="fa-light fa-arrow-up-right"></i></Link>
                    </div>
                </div>
                <div className="members">
                    <MeetusBox 
                        image={img_palmer} alt="Krisitne Palmer, chef operation officer"
                        title="Kristine Palmer"
                        description="Chef Operation Officer"
                    />
                     <MeetusBox 
                        image={img_aubri} alt="Mark Aubri, senior consultant"
                        title="Mark Aubri"
                        description="Senior Consultant"
                    />
                     <MeetusBox 
                        image={img_hansen} alt="Kimberly Hansen, senior consultant"
                        title="Kimberly Hansen"
                        description="Senior Consultant"
                    />
                     <MeetusBox 
                        image={img_willoman} alt="Justin Willoman, senior tech consultant"
                        title="Justin Willoman"
                        description="Senior Tech Consultant"
                    />
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