import './articles.css'
import React from 'react'

import img_classroom from '../../../assets/images/classroomimg.png'
import img_implement from '../../../assets/images/implementimg.png'
import img_cssdesign from '../../../assets/images/cssdesignimg.png'
import img_dots from '../../../assets/images/dot.png'
import { Link } from 'react-router-dom'

const articles = () => {
  return (
    <section className="articles-news">
        <div className="container">
            <div className="content-header">
                <h2>Get Every Single Articles & News</h2>
                <div className="btn-articles">
                    <Link to="/Browse articles" className="btn btn-transparent">Browse Articles <i className="fa-light fa-arrow-up-right"></i></Link>
                </div>
            </div>
            <div className="articles">
                <article>
                        <div className="box-img">
                            <img src={img_classroom} alt="woman in a classroom" />
                            <div className="box-color">
                                <span>25</span>
                                <p>Mar</p>    
                            </div>
                        </div>
                        <div className="box-info">
                            <span>Business</span>
                            <h4>How To Use Digitalization 
                                In The Classroom</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                        </div>
                </article>
                <article>
                        <div className="box-img">
                            <img src={img_implement} alt="text on a computerscreen" />
                            <div className="box-color">
                                <span>17</span>
                                <p>Mar</p>    
                            </div>
                        </div>
                        <div className="box-info">
                            <span>Business</span>
                            <h4>How To Implement Chat GPT
                                In Your Projects</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                        </div>
                </article>
                <article>
                        <div className="box-img">
                            <img src={img_cssdesign} alt="mobile phone and two books on a table" />
                            <div className="box-color">
                                <span>13</span>
                                <p>Mar</p>    
                            </div>
                        </div>
                        <div className="box-info">
                            <span>Business</span>
                            <h4>The Guide To Support 
                                Modern CSS Design</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                        </div>
                </article>
            </div>
            <div className="dots">
                <img src={img_dots} alt="dots" />
            </div>
        </div>
    </section>
  )
}

export default articles