import './signup.css'
import React from 'react'

import img_wavylines from '../../../assets/images/background-lines-right.svg'

const signup = () => {
  return (
    <section class="signup">
        <img class="wavy-lines-right" src={img_wavylines} alt="wavy lines to the right" />
        <div class="container">
            <div class="style-h2">
                <h2>Get News Updates By Signup </h2>
            </div>
            <form>
                <input type="text" placeholder="username@domain.com" />
                <a class="btn btn-yellow">Subscribe <i class="fa-light fa-arrow-up-right"></i></a>
            </form>
        </div>
    </section>
  )
}

export default signup