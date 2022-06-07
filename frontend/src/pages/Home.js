import React from 'react'
import { HomeWrapper } from './HomeStyles';
// import { Section } from '../components/Section/Section';
import { Hero, About, Coffee, Projects, LevelUpSection } from './index';
// import { UnityPlayer } from '../components/Unity/UnityPlayer';


import './Home.css';
import Contact from '../components/Contact/Contact';


const Home = () => {
    return (
        <HomeWrapper>
            <Hero />
            <About />
            <LevelUpSection />
            <Coffee />
            <Projects />
            <Contact />
        </HomeWrapper>
    )
}

export default Home