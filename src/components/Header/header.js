import './header.css'
import React from 'react'
import Navsection from './navsection/navsection'
import Showcase from './showcase/showcase'

import img_critologotype from '../../assets/images/logotype.svg'

const header = () => {
  return (
    <header>
            <img className="logotype.svg" src={img_critologotype} alt="Crito Logotype" />
        <Navsection />
        <Showcase />
    </header>
  )
}

export default header