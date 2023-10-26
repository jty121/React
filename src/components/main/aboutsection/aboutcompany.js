import './aboutcompany.css'
import React from 'react'

const aboutcompany = () => {
  return (
        <section className="about-company">
            <div className="container">
                <div className="content">
                    <div className="founder">
                        <div className="box-blue">
                            <h4>Samantha Brown,</h4>
                            <p>Founder</p>
                        </div>
                        <div>
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                        </div>
                    </div>
                    <div className="box-left">
                        <img src="images/aboutcompany.png" alt="picture of a woman walking and holding a laptop" />
                    </div>
                    <div className="style-h2">
                        <p>About Company</p>
                        <h2>We Are Business Consulting & Credit Repair Experts</h2>
                    </div>
                    <div className="text-box">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                    </div>
                    <div className="buttons">
                        <a className="btn btn-black" href="#">Learn More <i className="fa-light fa-arrow-up-right"></i></a>
                        <a className="btn btn-video" href="#"><i className="fa-light fa-circle-play"></i>Intro Video</a>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default aboutcompany