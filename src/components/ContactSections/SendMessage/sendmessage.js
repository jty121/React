import React from 'react'

const sendmessage = () => {
  return (
    <section className="send-message">
            <div className="container">
                <div className="content">
                    <div className="style-h2">
                        <h2>Leave us a message
                            for any information.
                        </h2>
                    </div>
                </div>
                <div className="users">
                    <form id="registerform" method="get">
                        <div className="name">
                            <label className="name" for="name"></label>
                            <input className="name" type="text" id="name" name="name" title="name" placeholder="Name*" />
                        </div>
                        <div className="email">
                            <label className="email" for="email"></label>
                            <input className="email" type="text" id="email" name="email" title="email" placeholder="Email*" />
                        </div>
                        <div className="message">
                            <label className="message" for="message"></label>
                            <textarea id="message" name="message" placeholder="Your Message*"></textarea>
                        </div>
                        <div className="button">
                            <a className="btn btn-yellow">Send Message <i className="fa-light fa-arrow-up-right"></i></a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default sendmessage