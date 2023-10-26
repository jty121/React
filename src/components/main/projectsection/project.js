import './project.css'
import React from 'react'

const project = () => {
  return (
    <section className="project-and-case">
        <div className="container">
            <div className="style-h2">
                <p>Project & Case Studies</p>
                <h2>Let’s Looks Our Global Projects</h2>
            </div>
            <div className="project-cases">
                <article>
                    <img src="images/growbusiness.png" alt="picture of a piece of business magazine" />
                    <div className="style-h4">
                        <h4>Grow your business</h4>
                    </div>
                    <div className="button-read">
                        <a href="#">Read More <i className="fa-light fa-arrow-up-right"></i></a>
                    </div>
                </article>
                <article>
                    <img src="images/responsivewebsite.png" alt="picture of pink Apple products on a desk" />
                    <div className="style-h4">
                        <h4>Why your client needs a responsive website</h4>
                    </div>
                    <div className="button-read">
                        <a href="#">Read More <i className="fa-light fa-arrow-up-right"></i></a>
                    </div>
                </article>
                <article>
                    <img src="images/educateemployeers.png" alt="picture of office supplies" />
                    <div className="style-h4">
                        <h4>Educate your employees to get better results</h4>
                    </div> 
                    <div className="button-read">   
                        <a href="#">Read More <i className="fa-light fa-arrow-up-right"></i></a>
                    </div>
                </article>
                <article>
                    <img src="images/businessinsigghts.png" alt="picture of a laptop on a desk" />
                    <div className="style-h4">
                        <h4>Business Insights is a important piece of your business</h4>
                    </div>
                    <div className="button-read">
                        <a href="#">Read More <i className="fa-light fa-arrow-up-right"></i></a>
                    </div>
                </article>
            </div>
            <div className="btn-recent-projects">
                <a className="btn btn-black">All Recent Projects <i className="fa-light fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default project