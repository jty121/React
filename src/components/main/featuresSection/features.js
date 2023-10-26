import './features.css'
import React from 'react'

import img_handshake from '../../../assets/images/handshakeicon.png'
import img_bulb from '../../../assets/images/bulbicon.png'
import img_financial from '../../../assets/images/financialicon.png'
import img_boxicon from '../../../assets/images/boxicon.png'

const features = () => {
  return (
    <section className="features">
        <div className="container mt-3 border">
            <div className="features-content">
                <div className="style-h2">
                    <p>Features</p>
                    <h2>
                        Our Accounting is
                        trusted by thousand
                        of companies
                    </h2>
                    <a className="btn btn-yellow">Learn More <i className="fa-light fa-arrow-up-right"></i></a>
                </div>
                <div className="box-info">
                <div className="box">
                    <img src={img_handshake} />
                    <h4>Business Advice</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="box">
                    <img src={img_bulb} />
                    <h4>Startup Business</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="box">
                    <img src={img_financial} />
                    <h4>Financial Advice</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="box"> 
                    <img src={img_boxicon} />
                    <h4>Risk Management</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default features