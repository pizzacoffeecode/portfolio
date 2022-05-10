import React from 'react'
import { Section, SectionDivider, SectionTitle } from './../Section/Section';
import { leveldata } from './leveldata';
import { LevelUpContainer, LevelUpBackground, Text, ClipPath } from './LevelUp';


const LevelUpSection = () => {
    const levels = leveldata.map((lvl) => {
        return (

            <LevelUpBackground>
                <LevelUpContainer>
                    <Text>{ lvl.skill } - { lvl.level }</Text>
                    <ClipPath skill={ lvl.skill } level={ lvl.level } color1={ lvl.color1 } color2={ lvl.color2 } />
                </LevelUpContainer>
            </LevelUpBackground>

        );
    });

    return (
        <Section >
            <SectionDivider />
            <SectionTitle main>Skills</SectionTitle>
            <div style={ { width: "88%", alignSelf: "center" } }>
                { levels }
            </div>
        </Section >
    )
}

export default LevelUpSection