import './showcasecontact.css'
import React from 'react'


import img_wavyLines from '../../../assets/images/background-lines.svg'

const showcasecontact = () => {
  return (
    <section className="connect">
            <img className="wavy-lines" src={img_wavyLines} alt="" />
            <div className="container">
                <div className="home-contact">
                    <span className="home">Home</span>
                    <p className="contact">Contact</p>
                </div>
                <h2>
                    Let’s Connect
                </h2>
            </div>
        </section>
  )
}

export default showcasecontact