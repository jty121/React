import './main.css'
import React from 'react'
import LogotypeSection from './logotypesection/logotype'
import FeaturesSection from './featuresSection/features'
import AboutSection from './aboutsection/aboutcompany'
import ServiceSection from './servicesection/services'
import ChoooseUsSection from './chooseussection/chooseus'
import ProjectSection from './projectsection/project'
import MeetusSection from './meetussection/meetus'
import TestimonialSection from './testimonialsection/testimonial'


const main = () => {
  return (
    <main>
        <LogotypeSection />
        <FeaturesSection />
        <AboutSection />
        <ServiceSection />
        <ChoooseUsSection />
        <ProjectSection />
        <MeetusSection />
        <TestimonialSection />
    </main>
  )
}

export default main