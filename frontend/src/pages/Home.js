import React from 'react'
import { HomeWrapper } from './HomeStyles';
// import { Section } from '../components/Section/Section';
import Projects from '../components/Projects/Projects';
import Hero from '../components/Hero/Hero';
import './Home.css';
import LevelUpSection from './../components/LevelUp/LevelUpSection';

const Home = () => {
    return (
        <HomeWrapper>
            <Hero />
            <Projects />
            <LevelUpSection />
        </HomeWrapper>
    )
}

export default Home