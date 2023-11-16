import './ShowcaseArticle.css'
import React from 'react'

import img_wavyLines from '../../../assets/images/background-lines.svg'

const ShowcaseArticle = () => {
  return (
    <section className="connect">
        <img className="wavy-lines" src={img_wavyLines} alt="" />
            <div className="container">
                <div className="home-contact">
                    <span className="home">Home</span>
                    <p className="contact">News</p>
                </div>
                <h2>
                    News & Articles
                </h2>
            </div>
    </section>
  )
}

export default ShowcaseArticle