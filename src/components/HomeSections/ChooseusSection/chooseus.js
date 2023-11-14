import './chooseus.css'
import React from 'react'

import img_thumbs from '../../../assets/images/thumbsupicon.svg'
import img_hexagon from '../../../assets/images/hexagonicon.svg'
import img_experience from '../../../assets/images/experienceicon.svg'
import img_artificial from '../../../assets/images/ai-icon.svg'
import img_chooseus from '../../../assets/images/chooseusimage.jpg'

const chooseus = () => {
  return (
    <section className="choose-us">
        <div className="bg-color"></div>
            <div className="container">
                <div className="left-column">
                    <div className="style-h2">
                        <p>Why Choose Us</p>
                        <h2>Why We Are The Best Business Consulting Agency</h2>
                    </div>
                    <div className="info-box">
                        <div>
                            <img src={img_thumbs} alt="thumbs up icon" />
                        </div>
                        <div> 
                            <h4>Process Excellence</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="info-box">   
                        <div className="icons">
                            <img src={img_hexagon} alt="hexagon icon" />
                        </div>
                        <div> 
                            <h4>Strategic Planning</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="icons">
                            <img src={img_experience} alt="design icon" />
                        </div>
                        <div> 
                            <h4>Experience Design</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="icons">
                            <img src={img_artificial} alt="artificial inteligence icon" />
                        </div>
                        <div> 
                            <h4>Artificial Inteligence</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            <div className="right-column">
                <img src={img_chooseus} alt="two women looking at eachother, one is holding a tablet" />
            </div>  
        </div> 
    </section>
  )
}

export default chooseus