import './services.css'
import React from 'react'

import img_wavylines from '../../../assets/images/background-lines-right.svg'
import ServiceBox from './ServiceBox'

const services = () => {
  return (
    <section className="our-services">
        <img className="wavy-lines-right" src={img_wavylines} alt="white lines to the right" />
        <div className="container">
            <div className="style-h2">
                <p>Our Services </p>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>
            <div className="service-boxes">
                <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/business-advice" />
                <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/startup-business" />
                <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/financial-advice" />
                <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/risk-management" />
            </div>
            <div className="btn-browse">
                <a className="btn btn-transparent">Browse Services <i className="fa-light fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default services