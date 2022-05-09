import React from 'react'
import { HomeWrapper } from './HomeStyles';
// import { Section } from '../components/Section/Section';
import { Hero, About, Coffee, Projects, LevelUpSection } from './index';
import { UnityPlayer } from '../components/Unity/UnityPlayer';

import './Home.css';


const Home = () => {
    return (
        <HomeWrapper>
            <Hero />
            <About />
            <Coffee />

            <Projects />
            <LevelUpSection />
            <UnityPlayer />

        </HomeWrapper>
    )
}

export default Home