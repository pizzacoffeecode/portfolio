import React from 'react'
import { HomeWrapper } from './HomeStyles';
import { Section } from '../components/Section/Section';
import Projects from '../components/Projects/Projects';
import Hero from '../components/Hero/Hero';
import './Home.css';

const Home = () => {
    return (
        <HomeWrapper>
            <Hero />
            <Projects />
        </HomeWrapper>
    )
}

export default Home