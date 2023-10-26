import './header.css'
import React from 'react'
import Navsection from './NavSection/navsection'
import Showcase from './ShowcaseSection/showcase'

const header = () => {
  return (
    <header> 
        <Navsection />
        <Showcase />
    </header>
  )
}

export default header