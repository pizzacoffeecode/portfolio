import React, { useState, useEffect } from 'react'
import { Section, SectionDivider, SectionTitle } from './../Section/Section';
import { leveldata } from './leveldata';
import { LevelUpContainer, LevelUpBackground, Text, ClipPath, SkillContainer } from './LevelUpSectionStyles';
import PlusMinusIcon from './PlusMinusIcon/PlusMinusIcon';


const LevelUpSection = () => {
    const [ openAccordion, setOpenAccordion ] = useState([ false ]);

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






    function handleExpand(event, id) {
        //console.log("event = " + event + "key" + key);
        const tempArray = [ ...openAccordion ];
        tempArray[ id ] = event;
        setOpenAccordion(tempArray);

        //console.log("accordian" + openAccordion);
    }




    const levels = leveldata.map((skill, idx) => {

        return (
            <div key={ idx }>
                <SkillContainer key={ idx } >
                    {
                        skill.subskills.length > 0 ? (
                            <PlusMinusIcon key={ idx } id={ idx } handleExpand={ handleExpand } />
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
                    openAccordion[ idx ] &&

                    skill.subskills.map((subSkill, idx) => {
                        return <div key={ idx } style={ { marginLeft: "4rem" } }>{

                            <LevelUpBackground style={ { width: "100%", justifySelf: "end" } }>
                                <LevelUpContainer>
                                    <Text>{ subSkill.skill } - { subSkill.level }</Text>
                                    <ClipPath subSkill={ subSkill.skill } level={ subSkill.level } color1={ subSkill.color1 } color2={ subSkill.color2 } />
                                </LevelUpContainer>
                            </LevelUpBackground>
                        }</div>;
                    })
                }

            </div>


        );
    });

    return (
        <Section id="section4">
            <SectionDivider />
            <SectionTitle main>Skills</SectionTitle>
            <div style={ { width: "88%", alignSelf: "center" } }>
                { levels }
            </div>
        </Section >
    )
}

export default LevelUpSection