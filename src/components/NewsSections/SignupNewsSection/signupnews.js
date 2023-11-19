import './signupnews.css';
import React from 'react';
import { Link } from 'react-router-dom';


import img_wavylines from '../../../assets/images/background-wavy-lines.svg';


const signupnews = () => {
  return (
    <section className="signup">
        <img className="wavy-lines-right" src={img_wavylines} alt="wavy lines to the right" />
        <div className="container">
            <div className="style-h2">
                <h2>Get News Updates By Signup </h2>
            </div>
            <form>
                <input type="text" placeholder="username@domain.com" />
                <Link to="/Subscribe" className="btn btn-yellow">Subscribe <i className="fa-light fa-arrow-up-right"></i></Link>
            </form>
        </div>
    </section>
  )
}

export default signupnews