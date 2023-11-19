import './articlenews.css';
import React from 'react';
import { Link } from 'react-router-dom';
import ArticleBox from './articlebox';


import img_dots from '../../../assets/images/dot.png';


const ArticleNews = () => {
  return (
    <section className="articles-news">
        <div className="container">
            <div className="content-header">
                <h2>Get Every Single Articles & News</h2>
                <div className="btn-articles">
                    <Link to="/newsdetails" className="btn btn-transparent">Browse Articles <i className="fa-light fa-arrow-up-right"></i></Link>
                </div>
            </div>
                <article>
                    <div className="articleboxes">
                    <ArticleBox />
                    </div>       
                </article>
            <div className="dots">
                <img src={img_dots} alt="dots" />
            </div>
        </div>
    </section>
  )
}

export default ArticleNews