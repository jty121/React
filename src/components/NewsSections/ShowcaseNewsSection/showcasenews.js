import React from 'react'
import './showcasenews.css'

import img_wavyLines from '../../../assets/images/background-lines.svg'

const showcasenews = () => {
  return (
    <section className="news-articles">
    <img className="wavy-lines" src={img_wavyLines} alt="wavy lines to the left" />
    <div className="container">
        <div className="home-news">
            <span>Home</span>
            <p>News</p>
        </div>
        <h2>
            News & Articles
        </h2>
    </div>
</section>
  )
}

export default showcasenews