import './SendMessageForms.css';
import React, { useState } from 'react';


function SendMessageForms() {

        const [name, setName] = useState('')
        const [errorName, setErrorName] = useState('')
        const [email, setEmail] = useState('')
        const [errorEmail, setErrorEmail] = useState('')
        const [message, setMessage] = useState('')
        const [errorMessage, setErrorMessage] = useState('')
        const [sendMessage, setSendMessage] = useState(false)


        const handleSubmit = (e) => {
            e.preventDefault()
 
                    const validateEmail = (email) => {
                        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) { 
                            console.log('Enter a valid e-mail')
                            return true
                        } else {
                            return false
                        }  
                    }

                    const validateName = (name) => {
                        if (/^[A-Za-z\s]+$/.test(name)) {
                            console.log('Enter a valid name')
                            return true
                        } else {
                            return false
                        }
                    }


                    if (!name) {   
                        setErrorName ('Please enter a name')
                    } else if (!validateName(name)) {
                        setErrorName ('You must enter a valid name')
                    } else {
                        setErrorName('')
                    }


                    if (!email) {
                        setErrorEmail ('Please enter an e-mail')
                    } else if (!validateEmail(email)) {
                        setErrorEmail ('You must enter a valid E-mail')
                    } else {
                        setErrorEmail('')
                    }


                    if (!message) {
                        setErrorMessage ('Please type a message')
                    } else {
                        setErrorMessage('')
                    }

            if (name && validateName(name) && email && validateEmail(email) && message) { //om användaren fyllt i alla fälten rätt

                 fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                        method: 'POST', 
                        headers: { 'content-type': 'application/json',
                        },
                        body: JSON.stringify({ name, email, message }),   
                    })
                    .then(response => {
                        if (response.status === 200) {
                            console.log('success')
                            setSendMessage(true)
                            return response.text()
                        } 
                        else {
                            console.error('bad request' + response.status)  //om statuskod inte är i 200-serien ska den här köras.
                        }
                    })
                    .then(data => {
                        console.log(data)
                    })
                    .catch(error => {
                        console.error('Something went wrong', error)    //här fångar man upp alla eventuella fel
                    })
                    
                setErrorName('')       //rensar felmeddelande när användaren skrivit rätt i fälten.
                setErrorEmail('')
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
                            <button className="btn btn-yellow" type="submit" onClick={handleSubmit}>Send Message <i className="fa-light fa-arrow-up-right"></i></button>
                        </div>
                        {sendMessage && <p>Your message has been sent! </p>}
                    </form>
                </div>
            </div>
        </section>
  )
}

export default SendMessageForms