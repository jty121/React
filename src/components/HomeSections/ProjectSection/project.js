import './project.css'
import ReusableProjectBox from './ReusableProjectBox'
import React from 'react'

import img_business from '../../../assets/images/growbusiness.png'
import img_responsive from '../../../assets/images/responsivewebsite.png'
import img_educate from '../../../assets/images/educateemployeers.png'
import img_businessinsight from '../../../assets/images/businessinsigghts.png'
import { Link } from 'react-router-dom'

const project = () => {
  return (
    <section className="project-and-case">
        <div className="container">
            <div className="style-h2">
                <p>Project & Case Studies</p>
                <h2>Let’s Looks Our Global Projects</h2>
            </div>
            <div className="project-cases">
                <ReusableProjectBox 
                    image={img_business} alt="a piece of business magazine"
                    title="Grow your business"
                    url="/Read more"
                />
                <ReusableProjectBox 
                    image={img_responsive} alt="pink Apple products on a desk"
                    title="Why your client needs a responsive website"
                    url="/Read more"
                />
                <ReusableProjectBox 
                    image={img_educate} alt="office supplies"
                    title="Educate your employees to get better results"
                    url="/Read more"
                />
                <ReusableProjectBox 
                    image={img_businessinsight} alt="laptop on a desk"
                    title="Business Insights is a important piece of your business"
                    url="/Read more"
                />
            </div>
            <div className="btn-recent-projects">
                <Link className="btn btn-black">All Recent Projects <i className="fa-light fa-arrow-up-right"></i></Link>
            </div>
        </div>
    </section>
  )
}

export default project