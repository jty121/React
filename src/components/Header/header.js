import './header.css';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import img_critologotype from '../../assets/images/logotype.svg';


const header = () => {
    
  return (
    <header>
    <div className="container">
        <Link to="/" ><img className="logotype.svg" src={img_critologotype} alt="Crito Logotype" /></Link>
        <div className="menu-bar"><i className="fa-regular fa-bars-staggered"></i></div>
        <div className="menu">
            <div className="contact-menu">
                <div className="contact-information">
                    <div className="content">
                        <i className="fa-light fa-phone-volume"></i>
                        +46 (8) 121 470 50
                    </div>
                    <div className="content">
                        <i className="fa-light fa-envelope-dot"></i>
                        info@crito.com
                    </div>
                    <div className="content last">
                        <i className="fa-light fa-location-dot"></i>
                        Sveavägen 31, 111 34 STOCKHOLM
                    </div>
                </div>
                <div className="social-media">
                    <Link to="http://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                    <Link to="http://www.twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></Link>
                    <Link to="http://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="http://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                </div>
            </div>
            <div className="main-menu">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/service">Service</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
                <Link to="/login" className="btn btn-yellow">Login <i className="fa-light fa-arrow-up-right"></i></Link>
            </div>
        </div>
    </div>
</header>
  )
}

export default header