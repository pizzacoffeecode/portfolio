import React from 'react'
import { HomeWrapper } from './HomeStyles';
// import { Section } from '../components/Section/Section';
import { Hero, About, Coffee, Projects, LevelUpSection } from './index';

import './Home.css';


const Home = () => {
    return (
        <HomeWrapper>
            <Hero />
            <About />
            <Coffee />
            <Projects />
            <LevelUpSection />
        </HomeWrapper>
    )
}

export default Home