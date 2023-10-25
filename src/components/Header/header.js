import './header.css'
import React from 'react'
import Navsection from './navsection/navsection'
import Showcase from './showcase/showcase'

const header = () => {
  return (
    <header>
            
        <Navsection />
        <Showcase />
    </header>
  )
}

export default header