import './main.css'
import React from 'react'
import LogotypeSection from './logotypesection/logotype'
import FeaturesSection from './featuresSection/features'
import AboutSection from './aboutsection/aboutcompany'
import ServiceSection from './servicesection/services'
import ChoooseUsSection from './chooseussection/chooseus'
import ProjectSection from './projectsection/project'

const main = () => {
  return (
    <main>
        <LogotypeSection />
        <FeaturesSection />
        <AboutSection />
        <ServiceSection />
        <ChoooseUsSection />
        <ProjectSection />
    </main>
  )
}

export default main