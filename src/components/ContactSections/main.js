import React from 'react'
import ShowcaseContact from './ShowcaseContact.js/showcasecontact'
import ContactUs from './ContactUs/contactus'
import SendMessage from './SendMessage/SendMessageForms'
import ContactMap from './ContactMap/contactmap'

const main = () => {
  return (
    <main>
        <ShowcaseContact />
        <ContactUs />
        <SendMessage />
        <ContactMap />
    </main>
  )
}

export default main