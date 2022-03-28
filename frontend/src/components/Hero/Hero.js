import React from 'react';

import { Section, SectionText, SectionTitle } from '../Section/Section';
import Button from '../Button/Button';
import { LeftSection, RightSection } from './HeroStyles';
import BackgroundAnimation from './../BackgroundAnimation/BackgroundAnimation';

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Hello <br />
                &nbsp;&nbsp; I'm David
                {/* Welcome To <br /> 
                Air Interactive */}
            </SectionTitle>
            <SectionText>
                Full Stack Mobile and Web Developer.

            </SectionText>
            <Button onClick={ () => window.location = 'https://google.com' }>Learn More</Button>
        </LeftSection>
        <RightSection>
            <BackgroundAnimation />
        </RightSection>
    </Section>
);

export default Hero;