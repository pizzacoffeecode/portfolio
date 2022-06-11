import React, { useState } from 'react'
import { Section, SectionDivider, SectionTitle } from './../Section/Section';
import { HeaderThree } from "../Projects/ProjectsStyles";
import { Skills } from './leveldata';
import { LevelUpContainer, LevelUpBackground, Text, ClipPath, SkillContainer } from './LevelUpSectionStyles';
import PlusMinusIcon from './PlusMinusIcon/PlusMinusIcon';



const LevelUpSection = () => {
    const skillsArr = [ ...Skills ];
    const [ openAccordion, setOpenAccordion ] = useState(skillsArr);

    // useEffect(() => {
    //     var acc = document.getElementsByClassName("accordion");
    //     var i;

    //     for (i = 0; i < acc.length; i++) {
    //         acc[ i ].addEventListener("click", function () {
    //             this.classList.toggle("active");
    //             var panel = this.nextElementSibling;
    //             if (panel.style.display === "block") {
    //                 panel.style.display = "none";
    //             } else {
    //                 panel.style.display = "block";
    //             }
    //         });
    //     }
    // }, [])






    function handleExpand(skillId, subjectId, openState) {
        const tempArray = [ ...openAccordion ];
        tempArray[ skillId ].subjects[ subjectId ].expanded = openState;
        setOpenAccordion(tempArray);
    }



    const skillsMapped = Skills.map((subject, idx) => {
        return (
            <div key={ idx + subject } style={ { paddingBottom: "2rem" } }>
                <HeaderThree>{ subject.title }</HeaderThree>
                {
                    subject.subjects.map((skill, idx2) => {
                        return <div key={ (idx2) }>
                            <SkillContainer >
                                {

                                    skill.subskills.length > 0 ? (
                                        <PlusMinusIcon key={ idx2 } skillId={ idx } subjectId={ idx2 } openState={ skill.expanded } handleExpand={ handleExpand } />
                                    ) : (
                                        <div />
                                    )
                                }
                                <LevelUpBackground>
                                    <LevelUpContainer>
                                        <Text>{ skill.skill } - { skill.level }</Text>
                                        <ClipPath skill={ skill.skill } level={ skill.level } color1={ skill.color1 } color2={ skill.color2 } />
                                    </LevelUpContainer>
                                </LevelUpBackground>
                            </SkillContainer>
                            {
                                openAccordion[ idx ].subjects[ idx2 ].expanded &&

                                skill.subskills.map((subSkill, idx2) => {
                                    return <div key={ idx2 } style={ { marginLeft: "4rem" } }>{

                                        <LevelUpBackground style={ { width: "100%", justifySelf: "end" } }>
                                            <LevelUpContainer>
                                                <Text>{ subSkill.skill } - { subSkill.level }</Text>
                                                <ClipPath subSkill={ subSkill.skill } level={ subSkill.level } color1={ skill.color1 } color2={ skill.color2 } />
                                            </LevelUpContainer>
                                        </LevelUpBackground>
                                    }</div>;
                                })
                            }
                        </div>;
                    })
                }
            </div>
        );
    });



    return (
        <Section id="section2">
            <SectionDivider />
            <SectionTitle main>Skills</SectionTitle>
            <div style={ { width: "88%", alignSelf: "center" } }>
                { skillsMapped }
            </div>
        </Section >
    )
}

export default LevelUpSection