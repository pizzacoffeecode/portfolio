import React, { useState, useEffect, useLayoutEffect } from 'react';

import { SectionText, SectionTitle } from '../Section/Section';
import Button from '../Button/Button';
import BackgroundAnimation from './../svg/BackgroundAnimation/BackgroundAnimation';

import './Hero.css';

//? GSAP
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);


const Hero = () => {
    const [ loaded, setLoaded ] = useState(false);
    //GSAP
    useEffect(() => {
        const learnLink = document.getElementById('learn');
        learnLink.addEventListener("click", () => {
            gsap.to(window, { duration: 1, scrollTo: { y: "#section1", offsetY: 90 } });
        });
    }, [])

    useLayoutEffect(() => {
        setLoaded(true);
    }, [])

    return (
        <div className='hero__container' >
            <div className='left_top__section'>
                <div className='left_top__content'>
                    <SectionTitle main center >
                        { "Hello" }
                    </SectionTitle>
                    <SectionTitle main center >
                        { "I'm David" }
                    </SectionTitle>
                    <SectionText>
                        { "Aspiring Web, and Application Developer" }
                    </SectionText>
                    <Button>{ "Learn More" }</Button>
                </div>
            </div>
            <div className='right_btm__section'>
                <div className='right_btm__content'>
                    {
                        loaded && < BackgroundAnimation />
                    }
                </div>
            </div>
        </div >
    )
}
export default Hero;