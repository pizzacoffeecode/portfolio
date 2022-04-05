import React from 'react';

import { Section, SectionText, SectionTitle } from '../Section/Section';
import Button from '../Button/Button';
import { LeftSection, RightSection } from './HeroStyles';
import BackgroundAnimation from './../BackgroundAnimation/BackgroundAnimation';

const Hero = () => (
    <Section row nopadding alignCenter>
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
        </RightSection>
    </Section>
);

export default Hero;