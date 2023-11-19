import './aboutcompany.css';
import React from 'react';
import { Link } from 'react-router-dom';

import img_aboutcompany from '../../../assets/images/aboutcompany.png';


const aboutcompany = () => {
    
  return (
        <section className="about-company">
            <div className="container">
                <div className="content">
                    <div className="founder">
                        <div className="box-blue">
                            <h4>Samantha Brown,</h4>
                            <p>Founder</p>
                        </div>
                        <div>
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                        </div>
                    </div>
                    <div className="box-left">
                        <img src={img_aboutcompany} alt="woman walking and holding a laptop" />
                    </div>
                    <div className="style-h2">
                        <p>About Company</p>
                        <h2>We Are Business Consulting & Credit Repair Experts</h2>
                    </div>
                    <div className="text-box">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                    </div>
                    <div className="buttons">
                        <Link to="/Learn more" className="btn btn-black">Learn More <i className="fa-light fa-arrow-up-right"></i></Link>
                        <Link to="/Intro video" className="btn btn-video"><i className="fa-light fa-circle-play"></i>Intro Video</Link>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default aboutcompany