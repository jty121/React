import './header.css'
import React from 'react'

import img_critologotype from '../../assets/images/logotype.svg'

const header = () => {
  return (
    <header>
    <div className="container">
        <img className="logotype.svg" src={img_critologotype} alt="Crito Logotype" />
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
                    <a href="http://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="http://www.twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="http://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="http://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div className="main-menu">
                <nav>
                    <a className="active" href="/">Home</a>
                    <a href="service.html">Service</a>
                    <a href="news.html">News</a>
                    <a href="/contact">Contact</a>
                </nav>
                <a className="btn btn-yellow">Login <i className="fa-light fa-arrow-up-right"></i></a>
            </div>
        </div>
    </div>
</header>
  )
}

export default header