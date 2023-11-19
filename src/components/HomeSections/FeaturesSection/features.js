import './features.css';
import FeaturesBox from './featuresbox';
import React from 'react';
import { Link } from 'react-router-dom';

import img_handshake from '../../../assets/images/handshakeicon.png';
import img_bulb from '../../../assets/images/bulbicon.png';
import img_financial from '../../../assets/images/financialicon.png';
import img_boxicon from '../../../assets/images/boxicon.png';


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
                    <Link to="/Learn more" className="btn btn-yellow">Learn More <i className="fa-light fa-arrow-up-right"></i></Link>
                </div>
                <div className="box-info">
                    <FeaturesBox image={img_handshake} title="Business Advice" descpription="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                    <FeaturesBox image={img_bulb} title="Startup Business" descpription="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                    <FeaturesBox image={img_financial} title="Financial Advice" descpription="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                    <FeaturesBox image={img_boxicon} title="Risk Management" descpription="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default features