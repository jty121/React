import './articles.css';
import ReusableArticleBox from './ReusableArticleBox';
import React from 'react';
import { Link } from 'react-router-dom';



import img_classroom from '../../../assets/images/classroomimg.png';
import img_implement from '../../../assets/images/implementimg.png';
import img_cssdesign from '../../../assets/images/cssdesignimg.png';
import img_dots from '../../../assets/images/dot.png';


const articles = () => {
    
  return (
    <section className="articles-news">
        <div className="container">
            <div className="content-header">
                <h2>Get Every Single Articles & News</h2>
                <div className="btn-articles">
                    <Link to="/news" className="btn btn-transparent">Browse Articles <i className="fa-light fa-arrow-up-right"></i></Link>
                </div>
            </div>
            <div className="articles">
                <ReusableArticleBox 
                    image={img_classroom} alt="woman in a classroom" 
                    date="25"
                    month="Mar"
                    text="Business"
                    title="How To Use Digitalization 
                    In The Classroom"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."
                />
                <ReusableArticleBox 
                    image={img_implement} alt="text on a computerscreen" 
                    date="17"
                    month="Mar"
                    text="Business"
                    title="How To Implement Chat GPT
                    In Your Projects"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."
                />
                <ReusableArticleBox 
                    image={img_cssdesign} alt="mobile phone and two books on a table" 
                    date="13"
                    month="Mar"
                    text="Business"
                    title="The Guide To Support 
                    Modern CSS Design"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."
                />
            </div>
            <div className="dots">
                <img src={img_dots} alt="dots" />
            </div>
        </div>
    </section>
  )
}

export default articles