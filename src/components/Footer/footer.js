import './footer.css'
import React from 'react'

const Footer = () => {
  return (
    <footer className="crito-footer">
    <img className="wavy-lines-right" src="images/background-lines-white-right.svg" alt="wavy lines to the right" />
    <div className="container">
        <div className="content">  
            <div className="footer-boxes">
                <div className="box-logotype">
                    <img src="images/Logofooter.svg" alt="Crito logotype" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>  
                <div className="box">
                    <h4>Company</h4>
                    <p>About </p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>
                <div className="box">
                    <h4>Help</h4>
                    <p>Customer Support</p>
                    <p>Delivery Details</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="box">
                    <h4>Resources</h4>
                    <p>Free eBooks</p>
                    <p>Development Tutorial</p>
                    <p>How to - Blog</p>
                    <p>Youtube Playlist</p>
                </div>
                <div className="box">
                    <h4>Link</h4>
                    <p>Free eBooks</p>
                    <p>Development Tutorial</p>
                    <p>How to - Blog</p>
                    <p>Youtube Playlist</p>
                </div>
            </div>
        </div>
    </div>  
    <div className="copyrights-socialmedia">
        <div className="container">
            <div className="copyrights">
                &copy;  2023 Crito - Consulting Company Inc. All Rights Reserved.
            </div>
            <div className="social-media">
                <a href="http://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="http://www.twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                <a href="http://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="http://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </div>    
</footer>
  )
}

export default Footer