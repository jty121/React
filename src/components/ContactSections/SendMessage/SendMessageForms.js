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


                //flyttat upp valideringen för email adressen, hade satt den längst ner i if-satsen
                    const validateEmail = (email) => {
                        if (/^[A-Za-z\s]+$/.test(email)) { 
                            console.log('Enter a valid e-mail')
                            return false
                        } else {
                            return true
                        }  
                    }

                    if (!name) {   
                        setErrorName ('Please enter a name')
                    } else {
                        setErrorName('')
                    }

                    if (!email) {
                        setErrorEmail ('Please enter an e-mail')
                    } else if (!validateEmail(email)){
                        setErrorEmail ('You must enter a valid E-mail')
                    } else {
                        setErrorEmail('')
                    }

                    if (!message) {
                        setErrorMessage ('Please type a message')
                    } else {
                        setErrorMessage('')
                    }

            if (name && email && validateEmail(email) && message) { //om användaren fyllt i alla fälten rätt

                 fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                        method: 'POST', 
                        headers: { 'content-type': 'application/json',
                        },
                        body: JSON.stringify({ name, email, message }),   
                    })
                    .then(response => {
                        if (response.status === 200) {
                            console.log('success')
                            return response.text()
                        } else {
                            console.log('not successful' + response.status)  
                        }
                    })
                    .then(data => {
                        console.log(data)
                    })
                    .catch(error => {
                        console.error('error message')
                    })
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
                            <label className="name" htmlFor="name"></label>
                            <input className="name" type="text" name="name" title="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            {errorName && <p style= {{ color: 'red' }}>{errorName}</p>}
                        </div> 
                        <div className="email">
                            <label className="email" htmlFor="email"></label>
                            <input className="email" type="text" name="email" title="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {errorEmail && <p style= {{ color: 'red' }}>{errorEmail}</p>}
                        </div>
                        <div className="message">
                            <label className="message" htmlFor="message"></label>
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