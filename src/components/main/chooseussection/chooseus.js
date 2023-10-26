import './chooseus.css'
import React from 'react'

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
                    <img src="images/thumbsupicon.svg" alt="thumbs up icon" />
                </div>
               <div> 
                    <h4>Process Excellence</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="info-box">
                <div className="icons">
                    <img src="images/hexagonicon.svg" alt="hexagon icon" />
                </div>
               <div> 
                    <h4>Strategic Planning</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="info-box">
                <div className="icons">
                    <img src="images/experienceicon.svg" alt="design icon" />
                </div>
               <div> 
                    <h4>Experience Design</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="info-box">
                <div className="icons">
                    <img src="images/ai-icon.svg" alt="artificial inteligence icon" />
                </div>
               <div> 
                    <h4>Artificial Inteligence</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </div>
        <div className="right-column">
            <img src="images/chooseusimage.jpg" alt="Picture of two women looking at eachother, one is holding a tablet" />
        </div>
    </div>
</section>
  )
}

export default chooseus