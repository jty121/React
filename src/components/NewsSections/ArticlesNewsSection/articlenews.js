import './articlenews.css'
import React from 'react'
import { Link } from 'react-router-dom'
import ArticleBox from './articlebox'



import img_classroom from '../../../assets/images/classroomimg.png'
import img_implement from '../../../assets/images/implementimg.png'
import img_cssdesign from '../../../assets/images/cssdesignimg.png'
import img_five from '../../../assets/images/FiveS.png'
import img_involve from '../../../assets/images/getinvolved.png'
import img_tour from '../../../assets/images/guidedtour.png'
import img_insight from '../../../assets/images/insights.png'
import img_apple from '../../../assets/images/appleproducts.png'
import img_improve from '../../../assets/images/worksupplies.png'
import img_dots from '../../../assets/images/dot.png'

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
            <div className="articles">
                <article>
                    <div className="articleboxes">
                        <ArticleBox 
                            image={img_classroom} alt="a woman in a classroom"
                            date="25" 
                            month="Mar" 
                            text="Business" 
                            title="How To Use Digitalization In The Classroom" 
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Architecto sed hic libero."
                        /> 
                        <ArticleBox 
                            image={img_implement} alt="text on a computerscreen"
                            date="17" 
                            month="Mar" 
                            text="Business" 
                            title="How To Implement Chat GPT In Your Projects" 
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Architecto sed hic libero."
                        />
                        <ArticleBox 
                            image={img_cssdesign} alt="mobile phone and two books on a table"
                            date="13" 
                            month="Mar" 
                            text="Business" 
                            title="The Guide To Support Modern CSS Design" 
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Architecto sed hic libero."
                        />       
                        <ArticleBox 
                            image={img_five} alt="writing down notes in a nootebook"
                            date="12" 
                            month="Mar" 
                            text="Business" 
                            title="Why You Need To Implement The Five S's" 
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Architecto sed hic libero."
                        />       
                        <ArticleBox 
                            image={img_involve} alt="office lamps hanging from ceiling in a row"
                            date="07" 
                            month="Mar" 
                            text="Business" 
                            title="Get More Involved With Your End Users" 
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Architecto sed hic libero."
                        />       
                        <ArticleBox 
                            image={img_tour} alt="office working desks with computer"
                            date="02" 
                            month="Mar" 
                            text="Business" 
                            title="Guided Tour Of Our New Head Office In Stockholm" 
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Architecto sed hic libero."
                        />       
                        <ArticleBox 
                            image={img_insight} alt="a laptop on a table"
                            date="28" 
                            month="feb" 
                            text="Business" 
                            title="Using Business Intelligence To Get Insights Into Our Businesses" 
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Architecto sed hic libero."
                        />       
                        <ArticleBox 
                            image={img_apple} alt="apple products laying on table"
                            date="18" 
                            month="feb" 
                            text="Business" 
                            title="Apple Has Released New Products. Are They Any Good?" 
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Architecto sed hic libero."
                        />       
                        <ArticleBox 
                            image={img_improve} alt="office supplies on work desk"
                            date="11" 
                            month="feb" 
                            text="Business" 
                            title="How To Improve Your Teams And Get A Better Result" 
                            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                            Architecto sed hic libero."
                        />
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

export default ArticleNews