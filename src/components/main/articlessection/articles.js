import './articles.css'
import React from 'react'

const articles = () => {
  return (
    <section className="articles-news">
        <div className="container">
            <div className="content-header">
                <h2>Get Every Single Articles & News</h2>
                <div className="btn-articles">
                    <a className="btn btn-transparent">Browse Articles <i className="fa-light fa-arrow-up-right"></i></a>
                </div>
            </div>
            <div className="articles">
                <article>
                        <div className="box-img">
                            <img src="images/classroomimg.png" alt="picture of a woman in a classroom" />
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
                            <img src="images/implementimg.png" alt="picture of text on a computerscreen" />
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
                            <img src="images/cssdesignimg.png" alt="picture of a mobile phone and two books on a table" />
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
                <img src="images/dotstestimonial.png" alt="dots" />
            </div>
        </div>
    </section>
  )
}

export default articles