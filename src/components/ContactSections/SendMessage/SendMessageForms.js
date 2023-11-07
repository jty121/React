import './SendMessageForms.css'
import React, { useState } from 'react'

function SendMessageForms() {

        const [name, setName] = useState('')
        const [errorName, setErrorName] = useState('')
        const [email, setEmail] = useState('')
        const [errorEmail, setErrorEmail] = useState('')
        const [message, setMessage] = useState('')
        const [errorMessage, setErrorMessage] = useState('')


        const handleSubmit = (e) => {
            e.preventDefault()

            setErrorName('')       //rensar felmeddelande när användaren skrivit rätt i fälten.
            setErrorEmail('')
            setErrorMessage('')


            if (!name) {   
                setErrorName ('Please enter a valid name')
            } else {
                setErrorName('')
            }

            if (!email) {
                setErrorEmail ('Please enter a valid E-mail')
            } else {
                setErrorEmail('')
            }

            if (!message) {
                setErrorMessage ('You must type a message')
            } else {
                setErrorMessage('')
            }

        }


//onChange uppdaterar värdet som användaren matat in och sparas sen in i sin tilldelade variabel

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
                    <form id="registerform" method="post">
                        <div className="name">
                            <label className="name" for="name"></label>
                            <input className="name" type="text" name="name" title="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            {errorName && <p style= {{ color: 'red' }}>{errorName}</p>}
                        </div> 
                        <div className="email">
                            <label className="email" for="email"></label>
                            <input className="email" type="text" name="email" title="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {errorEmail && <p style= {{ color: 'red' }}>{errorEmail}</p>}
                        </div>
                        <div className="message">
                            <label className="message" for="message"></label>
                            <textarea name="message" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            {errorMessage && <p style= {{ color: 'red' }}>{errorMessage}</p>}
                        </div>
                        <div className="button">
                            <a className="btn btn-yellow" type="submit" onClick={handleSubmit}>Send Message <i className="fa-light fa-arrow-up-right"></i></a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default SendMessageForms