import './logotype.css'
import React from 'react'

import img_paperz from '../../../assets/images/paperz.svg'
import img_dorfus from '../../../assets/images/dorfus.svg'
import img_martino from '../../../assets/images/martino.svg'
import img_square from '../../../assets/images/square.svg'
import img_gobona from '../../../assets/images/gobona.svg'

const logotype = () => {
  return (
    <section className="logotype">
        <div className="container">
            <div className="content">
                <img src={img_paperz} alt="Paperz Logotype" />
                <img src={img_dorfus} alt="Dorfus Logotype" />
                <img src={img_martino} alt="Martino Logotype" />
                <img src={img_square} alt="Square Logotype" />
                <img src={img_gobona} alt="Gobona Logotype" />
            </div>
        </div>
    </section>
  )
}

export default logotype