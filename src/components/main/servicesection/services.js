import './services.css'
import React from 'react'

const services = () => {
  return (
    <section className="our-services">
        <img className="wavy-lines-right" src="images/background-lines-right.svg" alt="white lines to the right" />
        <div className="container">
            <div className="style-h2">
                <p>Our Services</p>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>
            <div className="service-boxes">
                <div className="active business-box">
                    <div className="style-h4">
                        <h4>Business Advice</h4>
                    </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="arrow">   
                        <a href="#"><i className="fa-sharp fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
                <div className="active startup-box">
                    <div className="style-h4">
                        <h4>Startup Business</h4>
                    </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="arrow">
                        <a href="#"><i className="fa-sharp fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
                <div className="active financial-box">
                    <div className="style-h4">
                        <h4>Financial Advice</h4>
                    </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="arrow">
                        <a href="#"><i className="fa-sharp fa-solid fa-circle-arrow-right"></i></a>
                    </div>
                </div>
                <div className="active risk-box">
                    <div className="style-h4">
                        <h4>Risk Management</h4>
                    </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="arrow">  
                        <a href="#"><i className="fa-sharp fa-solid fa-circle-arrow-right"></i></a>
                    </div> 
                </div>
            </div>
            <div className="btn-browse">
                <a className="btn btn-transparent">Browse Services <i className="fa-light fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default services