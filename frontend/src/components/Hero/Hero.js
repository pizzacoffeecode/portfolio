import React from 'react';

import { Section, SectionText, SectionTitle } from '../Section/Section';
import Button from '../Button/Button';
import { LeftSection, RightSection } from './HeroStyles';
import BackgroundAnimation from './../svg/BackgroundAnimation/BackgroundAnimation';
import Pizza from './../svg/Pizza/Pizza'

import './Hero.css';

const Hero = () => (
    <div className='hero__container' >
        <div className='left_top__section'>
            <div className='left_top__content'>
                <SectionTitle main center >
                    Hello
                </SectionTitle>
                <SectionTitle main center >
                    I'm David
                </SectionTitle>
                <SectionText>
                    Web, Mobile, and Game Developer.

                </SectionText>
                <Button onClick={ () => window.location = 'https://google.com' }>Learn More</Button>
            </div>
        </div>
        <div className='right_btm__section'>
            <div className='right_btm__content'>
                <BackgroundAnimation />
                {/* <Pizza /> */ }
            </div>
        </div>
    </div >
);

export default Hero;



{/* <Section row nopadding alignCenter>
<LeftSection>
    <SectionTitle main center>
        Hello
    </SectionTitle>
    <SectionTitle main center>
        I'm David
    </SectionTitle>
    <SectionText>
        Web, Mobile, and Game Developer.

    </SectionText>
    <Button onClick={ () => window.location = 'https://google.com' }>Learn More</Button>
</LeftSection>
<RightSection>
    <BackgroundAnimation />
    {/* <Pizza /> */ }
// </RightSection >
// </Section > * /}