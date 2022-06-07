import { useEffect } from 'react';
import { Section, SectionTextFull, SectionTitle, SectionDivider } from '../Section/Section';
import "./About.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);



const About = () => {
    //GSAP
    useEffect(() => {
        const projectsLink = document.getElementById('projects__link');
        const contactsLink = document.getElementById('contacts__link');

        projectsLink.addEventListener("click", () => {
            gsap.to(window, { duration: 1, scrollTo: { y: "#section3", offsetY: 90 } });
        });
        contactsLink.addEventListener("click", () => {
            gsap.to(window, { duration: 1, scrollTo: { y: "#section4", offsetY: 90 } });
        });
    }, [])
    return (
        <Section nopadding id='section1'>
            <SectionDivider />
            <SectionTitle >
                About Me
            </SectionTitle>
            <SectionTextFull>
                I'm a <b>proudly</b> self-taught, full-stack, web and application developer. About 2 years ago I decided to take the leap and leave my former profession to turn my love of coding
                into a full-time career. Although my former profession is unrelated, I have a documented track-record of success, and bring a skill-set that will benefit any team environment.
            </SectionTextFull>
            <SectionTextFull>
                My primary languages are JavaScript and C# in addition to various frameworks such as React / React Native, NodeJS, and Unity.
                I'm at the stage now where I understand the full architecture of an application and can research the required stack for the frontend,
                backend, and database requirements of a project.
            </SectionTextFull>
            <SectionTextFull>
                I'm currently freelancing, but would really like to collaborate in a professional environment as a junior developer.
                If you think I might make a good fit for your next project or would like to learn more about me please feel free to <span type="button" id="contacts__link">reach out</span> or
                check out my <span type="button" id="projects__link">projects</span> section below...
            </SectionTextFull>
        </Section >
    )
}

export default About



