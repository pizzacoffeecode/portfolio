import React from 'react'
import { HomeWrapper } from './HomeStyles';
// import { Section } from '../components/Section/Section';
import { Hero, About, Coffee, Projects, LevelUpSection } from './index';
// import { UnityPlayer } from '../components/Unity/UnityPlayer';


import './Home.css';
import Contact from '../components/Contact/Contact';
import Navbar from './../components/Navbar/Navbar';


const Home = () => {
    return (
        <HomeWrapper>
            <Navbar />
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